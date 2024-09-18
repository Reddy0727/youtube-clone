import { createAsyncThunk } from "@reduxjs/toolkit";
import apiRequest from "../../utilities/api";

export const getRelatedVideos = createAsyncThunk(
    'relatedVideos/getRelatedVideos',
    async({videoId,isNext},{getState,rejectWithValue}) => {
        try {
            const { home: { nextPageToken } } = getState();
            const token = isNext ? nextPageToken : '';
            const { data } = await apiRequest.get('/videos', {
                params: {
                    part: 'snippet,contentDetails,statistics',
                    id: videoId,
                }
            });
            const channelId = data.items[0]?.snippet?.channelId
            const { data: activitiesResponse } = await apiRequest.get('/activities', {
              params: {
                part: 'snippet,contentDetails',
                channelId: channelId,
                maxResults: 20,
                pageToken: token,
              }
            });
            const uploadActivities = activitiesResponse.items.filter(
              activity => activity.snippet.type === 'upload'
            );
      
            const videoIds = uploadActivities.map(activity => activity.contentDetails.upload.videoId).join(',');
      
            const { data: videoDetailsResponse } = await apiRequest.get('/videos', {
              params: {
                part: 'snippet,contentDetails,statistics',
                id: videoIds,
                maxResults:20
              }
            });
      
            return {
              items: videoDetailsResponse.items,
              nextPageToken: activitiesResponse.nextPageToken,
              videoInfo:data.items
            };
        }
        catch (error) {
            return rejectWithValue(error.message)
        }
    }
)