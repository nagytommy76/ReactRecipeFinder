import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { AppDispatch } from '../store'
import { showLoading, hideLoading } from './LoadingSlice'
axios.defaults.baseURL = 'https://api.spoonacular.com/'

type Video = {
   youTubeId?: number
   shortTitle?: string
   thumbnail?: string
}

const initialState: { videos: Video[] } = {
   videos: []
}

const videoSlice = createSlice({
   name: 'videoSlice',
   initialState,
   reducers: {
      getVideos: (state, action: PayloadAction<object[]>) => {
         state.videos = action.payload
      }
   }
})

export default videoSlice.reducer

export const getVideosBySearchParameters = ({ videoName, numberPerPage }: { videoName: string; numberPerPage: number }) => {
   return async (dispatch: AppDispatch) => {
      dispatch(showLoading())
      await axios
         .get(`food/videos/search?${process.env.REACT_APP_API_KEY_QUERY}&query=${videoName}&number=${numberPerPage}`)
         .then((result) => {
            dispatch(videoSlice.actions.getVideos(result.data.videos))
            dispatch(hideLoading())
         })
   }
}
