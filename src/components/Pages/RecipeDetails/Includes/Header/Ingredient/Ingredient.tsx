import React from 'react'
import classes from './Ingredient.module.css'

const Ingredient: React.FC<IngredientProps> = ({ name, image, unit, amount }) => {
   return (
      <article className={classes.Ingredient}>
         <h3 className={classes.Title}>{name}</h3>
         {image ? (
            <img className={classes.Image} src={`https://spoonacular.com/cdn/ingredients_100x100/${image}`} alt='' />
         ) : (
            <img className={classes.Image} src='https://spoonacular.com/cdn/ingredients_100x100/apple.jpg' alt='' />
         )}
         <p>
            {amount} {unit}
         </p>
      </article>
   )
}

interface IngredientProps {
   name: string
   image: string
   unit: string
   amount: string
}

export default Ingredient
