import { SHOW_MODAL, HIDE_MODAL } from '../Actions/ActionTypes'
const initialState ={
    isModalOpen: false
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                isModalOpen: state.isModalOpen = true
            }
        case HIDE_MODAL:
            return {
                ...state,
                isModalOpen: state.isModalOpen = false
            }
        default:
            return state
    }
}

export default modalReducer