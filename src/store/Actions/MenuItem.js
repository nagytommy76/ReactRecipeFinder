import axios from 'axios'
import { GET_MENU_ITEMS } from './ActionTypes'

export const getMenuItems = (payload) => {
    return {
        type: GET_MENU_ITEMS,
        payload
    }
}
