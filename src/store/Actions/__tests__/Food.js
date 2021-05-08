import { SET_SELECTED_FOOD_ID, SET_FOODS, RESET_FOODS } from '../ActionTypes'
import { setSelectedFoodId, getFoodsBySearchParameters } from '../Food'

describe('Testing food action', () => {
    it('should create an action to set the selected food id', () => {
        const id = 322332
        const expectedAction = {
            type: SET_SELECTED_FOOD_ID,
            id
        }
        expect(setSelectedFoodId(id)).toEqual(expectedAction)
    })

    it('should get the recipes from the given url ', () => {
        
    })
})
