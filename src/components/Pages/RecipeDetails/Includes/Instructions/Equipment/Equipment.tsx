import React from 'react'
import { IngredientsAndEquipmentTypes, StepsType } from '../../../../../../store/Slices/Types/FoodTypes'
import classes from './Equipment.module.css'

const Equipment: React.FC<IngredientsAndEquipmentTypes> = ({ id, image, name }) => {
   return (
      <div key={id} className={classes.Equipment}>
         <img className={classes.Image} src={`https://spoonacular.com/cdn/equipment_100x100/${image}`} alt='' />
         <p>{name}</p>
      </div>
   )
}

export default Equipment
