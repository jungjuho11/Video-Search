import axios from 'axios';

const KEY = 'AIzaSyCLo3u566o2w0Gdl-Ssr6QJAmEjzY9-OD0';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        //https://developers.google.com/youtube/v3/docs/search/list#request
        part: 'snippet',
        type: 'video', //this makes sure it won't show any playlists
        maxResults: 5,
        key: KEY
        //q: cute cats
    }
});