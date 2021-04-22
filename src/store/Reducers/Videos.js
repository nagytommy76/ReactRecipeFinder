import { GET_VIDEOS } from '../Actions/ActionTypes'

const initialState = {
    videos: []
}

const videoReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case GET_VIDEOS:
           return {
               ...state,
               videos: state.videos.concat(actions.payload)
           }    
        default:
            return state
    }
}

export default videoReducer