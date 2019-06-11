import axios from 'axios';

const KEY = 'AIzaSyBo-sfDNnsgPrsYc2zQ2U72s_zgYW17ESk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});