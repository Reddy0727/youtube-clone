import apiRequest from "./api";

export const parseData = async (videoItems) => {
    const channelIds = videoItems.map(video => video.snippet.channelId).join(',');
    const channelResponse = await apiRequest.get('/channels', {
        params: {
            part: 'snippet',
            id: channelIds,
        }
    });

    const videoIds = videoItems.map(video => video.id.videoId).join(',');
    const videoResponse = await apiRequest.get('/videos', {
        params: {
            part: 'statistics,contentDetails',
            id: videoIds
        }
    });

    const videos = videoResponse.data.items;
    const channels = channelResponse.data.items;

    const videoWithChannelInfo = videoItems.map(video => {
        const channel = channels.find(c => c.id === video.snippet.channelId);
        const videoDetails = videos.find(v => v.id === video.id.videoId); 

        if (!videoDetails) {
            console.log(`No details found for videoId: ${video.id.videoId}`);
        }

        return {
            ...video,
            channelInfo: channel ? channel.snippet : null,
            videoInfo: videoDetails ? videoDetails : null  // if videoDetails exists
        };
    });

    return videoWithChannelInfo;
};
