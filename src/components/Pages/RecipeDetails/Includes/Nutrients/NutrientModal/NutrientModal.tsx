import React, { lazy } from 'react'
import classes from './NutrientModal.module.css'
import { useSelector } from 'react-redux'
import { makeGetSingleFoodState } from '../../../../../../store/selectors'

const SingleNutrient = lazy(() => import(/* webpackChunkName: "SingleNutrient" */ './Includes/SingleNutrient'))

const NutrientModal: React.FC = () => {
   const singleFood = useSelector(makeGetSingleFoodState)
   return (
      <>
         <header className={classes.Header}>
            <h1 className={classes.Title}>Food Nutrients</h1>
            <h4 className={classes.Calory}>
               <span className={classes.Highlighted}>{singleFood.nutrition.caloricBreakdown.percentCarbs}%</span> of daily carbs
               needs
            </h4>
            <h4 className={classes.Calory}>
               <span className={classes.Highlighted}>{singleFood.nutrition.caloricBreakdown.percentFat}%</span> of daily fat needs
            </h4>
            <h4 className={classes.Calory}>
               <span className={classes.Highlighted}>{singleFood.nutrition.caloricBreakdown.percentProtein}%</span> of daily
               protein needs
            </h4>
         </header>
         <section className={classes.Body}>
            {singleFood.nutrition.nutrients.map((nutrient, index) =>
               nutrient.amount !== 0 ? (
                  <SingleNutrient
                     key={index}
                     amount={nutrient.amount}
                     name={nutrient.name}
                     percentOfDailyNeeds={nutrient.percentOfDailyNeeds}
                     unit={nutrient.unit}
                  />
               ) : null
            )}
         </section>
      </>
   )
}

export default NutrientModal
