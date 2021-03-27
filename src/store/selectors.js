import { createSelector } from 'reselect'

const getSingleFoodById = (state, foodId) => {
    return state.foodReducer.foods.filter(item => item.id === foodId)[0]
}

// This no longer will work if it is needed in multiple places
//export const getBarState = createSelector(
//  [ getBar ],
//  (bar) => bar
//)

// This is proper if it is needed in multiple instances
export const makeGetSingleFoodState = () => createSelector(
    [ getSingleFoodById ],
    (singleFood) => singleFood
  )