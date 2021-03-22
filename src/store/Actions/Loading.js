import { SHOW_LOADING, HIDE_LOADING } from './ActionTypes'

export const showLoading = () => {
    return {
        type: SHOW_LOADING
    }
}

export const hideLoading = () => {
    return {
        type: HIDE_LOADING
    }
}