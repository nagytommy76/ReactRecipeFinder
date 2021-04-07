import { SHOW_MODAL, HIDE_MODAL } from './ActionTypes'

export const showModal = () =>{
    return {
        type: SHOW_MODAL
    }
}

export const hideModal = () =>{
    return {
        type: HIDE_MODAL
    }
}