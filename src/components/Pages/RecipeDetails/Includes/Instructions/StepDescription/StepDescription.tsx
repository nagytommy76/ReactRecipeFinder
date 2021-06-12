import React from 'react'
import { StepsType } from '../../../../../../store/Slices/Types/FoodTypes'
import classes from './StepDescription.module.css'

const StepDescription: React.FC<StepsType> = ({ steps }) => {
   return (
      <section className={classes.Description}>
         <h1 className={classes.Title}>Istructions</h1>
         {steps.map((step) => (
            <span className={classes.Text} key={step.number}>
               {step.step}{' '}
            </span>
         ))}
      </section>
   )
}

export default StepDescription
