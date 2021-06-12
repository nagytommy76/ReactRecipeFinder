import React from 'react'
import classes from './SingleNutrient.module.css'
import { NutriensType } from '../../../../../../../store/Slices/Types/FoodTypes'

const SingleNutrient: React.FC<NutriensType> = ({ amount, name, percentOfDailyNeeds, unit }) => {
   return (
      <div className={classes.SingleNutrient}>
         <h4 className={classes.Title}>{name}</h4>
         <p className={classes.Text}>
            Amount:{' '}
            <span className={classes.Highlighted}>
               {amount} {unit}
            </span>
         </p>
         <p className={classes.Text}>
            <span className={classes.Highlighted}>{percentOfDailyNeeds}%</span> of daily needs
         </p>
      </div>
   )
}

export default SingleNutrient
