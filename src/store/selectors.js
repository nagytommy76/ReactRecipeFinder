import { createSelector } from 'reselect'

const getSingleFoodById = (state) => {
    return state.foodReducer.foods.filter(item => item.id === state.foodReducer.selectedFoodId)[0]
}

// This is proper if it is needed in multiple instances
export const makeGetSingleFoodState = () => createSelector(
    [ getSingleFoodById ],
    (singleFood) => singleFood
)