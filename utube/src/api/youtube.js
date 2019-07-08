import axios from 'axios';

const KEY = `AIzaSyDnSED7B3FP7RtOvcr8US5MbninVLD1EW0`;

export default axios.create({
  baseURL: `https://www.googleapis.com/youtube/v3`,
  params: {
    part: `snippet`,
    maxResults: 5,
    type: 'video',
    key: `${ KEY }`
  },
});