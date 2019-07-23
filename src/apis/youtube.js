import axios from 'axios'

const KEY = 'AIzaSyBVqFLvDv4Zgw-Z9ASAPhNpMMvULY0kBo0'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY,
    } 
})