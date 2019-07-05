import axios from 'axios';

export default axios.create({
  baseURL: `https://api.unsplash.com`,
  headers: {
    Authorization: `Client-ID 8028aca8d4c6093103ea29759469e54e7575b65af76679f1757be38e8a7cff0f`
  }
});