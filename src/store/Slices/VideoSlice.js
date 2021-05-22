import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { showLoading, hideLoading } from './LoadingSlice'

axios.defaults.baseURL = 'https://api.spoonacular.com/'

const videoSlice = createSlice({
    name: 'videoSlice',
    initialState: { videos: [] },
    reducers: {
        getVideos: (state, action) => {
            state.videos = action.payload
        }
    }
})

export default videoSlice.reducer

export const getVideosBySearchParameters = ({ videoName, numberPerPage }) => {
    return async dispatch => {
        dispatch(showLoading())
        // dispatch(resetVideos())
        await axios.get(`food/videos/search?${process.env.REACT_APP_API_KEY_QUERY}&query=${videoName}&number=${numberPerPage}`).then(result => {
            dispatch(videoSlice.actions.getVideos(result.data.videos))
            dispatch(hideLoading())
        })
    }
}

