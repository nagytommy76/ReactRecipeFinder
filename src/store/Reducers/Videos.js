import { GET_VIDEOS, RESET_VIDEOS } from '../Actions/ActionTypes'

export const initialState = {
    videos: []
}

const videoReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case GET_VIDEOS:
           return {
               ...state,
               videos: state.videos.concat(actions.payload)
           }    
        case RESET_VIDEOS:
            return{
                ...state,
                videos: state.videos = []
            }
        default:
            return state
    }
}

export default videoReducer