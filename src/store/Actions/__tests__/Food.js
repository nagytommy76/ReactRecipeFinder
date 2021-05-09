import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { SET_SELECTED_FOOD_ID, SET_FOODS, RESET_FOODS, SHOW_LOADING, HIDE_LOADING } from '../ActionTypes'
import { setSelectedFoodId, getFoodsBySearchParameters } from '../Food'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const mockAxios = new MockAdapter(axios)
const store = mockStore()

describe('Testing food action', () => {
    beforeEach(() => {
        store.clearActions()
        mockAxios.reset()
    })
    afterEach(() => mockAxios.restore())

    it('should create an action to set the selected food id', () => {
        const id = 322332
        const expectedAction = {
            type: SET_SELECTED_FOOD_ID,
            id
        }
        expect(setSelectedFoodId(id)).toEqual(expectedAction)
    })

    // apiKey=820c397d13094ee6a0e1780f715b0558
    it('should get the recipes from the given url ', () => {
        const excpectedActions = [
            // { type: SET_FOODS },
            // { type: SHOW_LOADING },
            { type: RESET_FOODS },
            { type: HIDE_LOADING }
        ]
        const data = {
            foodName: 'pasta',
            numberOfResults: 15,
            includeIngreds: ''
        }
        // mockAxios.onGet(`/recipes/complexSearch?apiKey=820c397d13094ee6a0e1780f715b0558&query=${data.foodName}&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&number=${data.numberOfResults}&includeIngredients=${data.includeIngreds}`)
        // .reply(200, {response: [{ item: 'item1' }, { item: 'item2' }] })

        return store.dispatch(getFoodsBySearchParameters(data))
        expect(store.getActions()).toEqual(excpectedActions)
        /*.then(() => {*/
            // console.log(store.getActions())
        //})
    })
})
