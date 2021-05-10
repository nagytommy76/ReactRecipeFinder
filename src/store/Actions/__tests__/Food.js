import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import 'regenerator-runtime'



import moxios from 'moxios'




import { SET_SELECTED_FOOD_ID, SET_FOODS, RESET_FOODS, SHOW_LOADING, HIDE_LOADING } from '../ActionTypes'
import { setSelectedFoodId, getFoodsBySearchParameters, setFoods } from '../Food'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const mockAxios = new MockAdapter(axios)
const store = mockStore({})


describe('Testing food action', () => {
    beforeEach(() => moxios.install())
    afterEach(() => moxios.uninstall())

    it('should create an action to set the selected food id', () => {
        const id = 322332
        const expectedAction = {
            type: SET_SELECTED_FOOD_ID,
            id
        }
        expect(setSelectedFoodId(id)).toEqual(expectedAction)
    })

    it('should get the recipes from the given url ', async () => {
        const responseData = {
            food: {
                data: {
                    results: {
                        foodName: 'semmi',
                        id: 34343
                    }
                }
            }
        }
        const excpectedActions = [
            { type: SHOW_LOADING },
            { type: RESET_FOODS },
            { type: SET_FOODS, payload: [responseData] },
            { type: HIDE_LOADING }
        ]
        const data = {
            foodName: '',
            numberOfResults: 1,
            includeIngreds: ''
        }

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: responseData
            })
        })
        
        await store.dispatch(getFoodsBySearchParameters(data))
        .then(() => {
            console.log(store.getActions())
            // expect(store.getActions()[2]).toEqual(setFoods(responseData))
        })
        /**
         * complexSearch?apiKey=820c397d13094ee6a0e1780f715b0558&query=${data.foodName}&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&number=${data.numberOfResults}&includeIngredients=${data.includeIngreds}
         */
        // await mockAxios.onGet(`/semmi`).reply(200, responseData)
        // done()
        // await store.dispatch(getFoodsBySearchParameters(data))
        // .then(() => {
        //     console.log(store.getActions())
        //     expect(store.getActions()[2]).toEqual(setFoods(responseData))
        // }).catch(error => console.log(error))
        // done()
    })
})
