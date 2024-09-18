import { createAsyncThunk } from "@reduxjs/toolkit";
import { parseData } from "../../utilities/parseData";
import apiRequest from "../../utilities/api";

export const getSearchVideos = createAsyncThunk(
    'search/getSearchVideos',
  async (isNext, { getState, rejectWithValue }) => {
    try {
      const { search: { nextPageToken, searchValue } } = getState();
      const token = isNext ? nextPageToken : '';
      const { data } = await apiRequest.get('/search', {
        params: {
          part: 'snippet',
          maxResults: 20,
          q: searchValue,
          pageToken: token,
          type: 'video'
        }
      });
            const videoWithChannelInfo = await parseData(data.items); 
            return {items:videoWithChannelInfo,nextPageToken:data.nextPageToken}
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)