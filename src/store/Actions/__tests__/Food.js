import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import 'regenerator-runtime'

import axios from 'axios'
jest.mock('axios')

import { SET_SELECTED_FOOD_ID, SET_FOODS, RESET_FOODS, SHOW_LOADING, HIDE_LOADING } from '../ActionTypes'
import { setSelectedFoodId, getFoodsBySearchParameters } from '../Food'

const mockStore = configureStore([thunk])
const store = mockStore({})

describe('Testing food action', () => {
    it('should create an action to set the selected food id', () => {
        const id = 322332
        const expectedAction = {
            type: SET_SELECTED_FOOD_ID,
            id
        }
        expect(setSelectedFoodId(id)).toEqual(expectedAction)
    })

    it('should get the recipes from the given url ', async () => {
        const responseData = [
            {
                foodName: 'Test food ONE',
                id: 11258
            },
            {
                foodName: 'Test food TWO',
                id: 96631
            }
        ]
        const expectedActions = [
            { type: SHOW_LOADING },
            { type: RESET_FOODS },
            { type: SET_FOODS,  payload: responseData },
            { type: HIDE_LOADING }
        ]
        const data = {
            foodName: '',
            numberOfResults: 1,
            includeIngreds: ''
        }

        axios.get.mockResolvedValue({ data: { results: responseData }})

        await store.dispatch(getFoodsBySearchParameters(data))
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
