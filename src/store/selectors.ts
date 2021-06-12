import { createSelector } from '@reduxjs/toolkit'
import { RootState } from './store'

const getSingleFoodById = (state: RootState) =>
   state.foodReducer.foods.filter((item) => item.id === state.foodReducer.selectedFoodId)[0]

// This is proper if it is needed in multiple instances
export const makeGetSingleFoodState = createSelector([getSingleFoodById], (singleFood) => singleFood)
