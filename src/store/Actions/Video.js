import axios from 'axios'
import { GET_VIDEOS, RESET_VIDEOS } from './ActionTypes'
import { showLoading, hideLoading } from './Loading'
axios.defaults.baseURL = 'https://api.spoonacular.com/'

// RESET FOODS
const resetVideos = () => {
    return {
        type: RESET_VIDEOS
    }
}

const getVideos = (incomingData) => {
    return {
        type: GET_VIDEOS,
        payload: incomingData
    }
}

export const getVideosBySearchParameters = ({ videoName, numberPerPage }) => {
    return async dispatch => {
        dispatch(showLoading())
        dispatch(resetVideos())
        await axios.get(`food/videos/search?${process.env.REACT_APP_API_KEY_QUERY}&query=${videoName}&number=${numberPerPage}`).then(result => {
            dispatch(getVideos(result.data.videos))
            dispatch(hideLoading())
        })
    }
}