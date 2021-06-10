import React, { lazy } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'

import { makeGetSingleFoodState } from '../../../store/selectors'
import { showModal } from '../../../store/Slices/ModalSlice'

import classes from './RecipeDetails.module.css'

const Button = lazy(() => import(/* webpackChunkName: "BaseButton" */ '../../BaseComponents/BaseButton/BaseButton'))
const DetailHeader = lazy(() => import(/* webpackChunkName: "DetailHeader" */ './Includes/Header/Header'))
const Summary = lazy(() => import(/* webpackChunkName: "Summary" */ './Includes/Summary/Summary'))
const Instructions = lazy(() => import(/* webpackChunkName: "AnalizedInstructions" */ './Includes/Instructions/Instructions'))
const NutrientsModal = lazy(() => import(/* webpackChunkName: "NutrientsModal" */ './Includes/Nutrients/Nutrients.jsx'))

const RecipeDetails: React.FC = () => {
   const dispatch = useAppDispatch()
   const singleFood = useAppSelector(makeGetSingleFoodState)

   return (
      <section className={classes.RecipeDetails}>
         <h1 className={classes.Title}>{singleFood.title}</h1>
         <DetailHeader image={singleFood.image} ingredients={singleFood.extendedIngredients} />
         <section className={classes.ButtonContainer}>
            <Button openClickEvent={() => dispatch(showModal())}>Show food nutrients</Button>
         </section>
         <Summary summary={singleFood.summary} />
         {singleFood.analyzedInstructions && <Instructions steps={singleFood.analyzedInstructions[0].steps} />}
         <NutrientsModal />
      </section>
   )
}

export default RecipeDetails
