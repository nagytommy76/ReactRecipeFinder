import axios from 'axios'
import { GET_VIDEOS } from './ActionTypes'
axios.defaults.baseURL = 'https://api.spoonacular.com/'

const getVideos = (incomingData) => {
    return {
        type: GET_VIDEOS,
        payload: incomingData
    }
}

export const getVideosBySearchParameters = ({ videoName, numberPerPage }) => {
    return dispatch => {
        axios.get(`food/videos/search?${process.env.REACT_APP_API_KEY_QUERY}&query=${videoName}&number=${numberPerPage}`).then(result => dispatch(getVideos(result.data.videos)))
    }
}