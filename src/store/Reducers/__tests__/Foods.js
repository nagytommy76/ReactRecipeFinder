import foodReducer, { initialState } from '../Foods'
import { SET_FOODS, RESET_FOODS, SET_SELECTED_FOOD_ID } from '../../Actions/ActionTypes'

const food = {
    foodName: 'Pasta',
    calories: 544
}

describe('testing food reducer', () => {
    it('should return the initial state', () => {
        expect(foodReducer(undefined, {})).toEqual(initialState)
    })

    it('should handle SET_FOODS', () => {
        expect(
            foodReducer(initialState, { 
                type: SET_FOODS,
                payload: food
            })
        ).toEqual({
            ...initialState,
            // A foods.concat(action.payload), ezért a várt eredmény egy array melyben egy food object van
            foods: [{...food}]
        })
    })

    it('should handle the SET_SELECTED_FOOD_ID', () => {
        const foodId = 5453543
        expect(
            foodReducer(initialState, {
                type: SET_SELECTED_FOOD_ID,
                id: foodId
            })
        ).toEqual({
            ...initialState,
            selectedFoodId: foodId
        })
    })

    it('should reset the food array', () => {
        expect(
            foodReducer(initialState, { 
                type: SET_FOODS,
                payload: food
            })
        ).toEqual({
            ...initialState,
            foods: [{...food}]
        })

        expect(
            foodReducer(initialState, {
                type: RESET_FOODS
            })
        ).toEqual({
            ...initialState,
            foods: []
        })
        
    })
})
