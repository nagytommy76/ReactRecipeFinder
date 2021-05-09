import foodReducer, { initialState } from '../Foods'
import { SET_FOODS, RESET_FOODS, SET_SELECTED_FOOD_ID } from '../../Actions/ActionTypes'

describe('testing food reducer', () => {
    it('should return the initial state', () => {
        expect(foodReducer(undefined, {})).toEqual(initialState)
    })

    it('should handle SET_FOODS', () => {
        const food = {
            foodName: 'Pasta',
            calories: 544
        }
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
})
