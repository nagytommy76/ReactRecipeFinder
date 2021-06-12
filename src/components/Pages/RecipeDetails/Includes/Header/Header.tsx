import React, { useState, useEffect } from 'react'
import { IngredientTypes } from '../../../../../store/Slices/Types/FoodTypes'
import classes from './Header.module.css'

const Ingredient = React.lazy(() => import(/* webpackChunkName: "Ingredient" */ './Ingredient/Ingredient'))

const Header: React.FC<HeaderTypes> = ({ image, ingredients }) => {
   const [selectedIngredients, setSelectedIngredients] = useState<IngredientTypes[]>([])
   useEffect(() => {
      if (selectedIngredients.length === 0) {
         setSelectedIngredients((selectedIngredients) => [
            ...selectedIngredients,
            // a kiválogatott arrayból egyesítem id szerint az object-eket
            // YOUTUBE: https://www.youtube.com/watch?v=5JFJTGZ4gHQ&ab_channel=AllThingsJavaScript%2CLLC
            ...ingredients
               .reduce((map: Map<number, IngredientTypes>, obj: IngredientTypes) => map.set(obj.id, obj), new Map())
               .values()
         ])
      }
   }, [ingredients, selectedIngredients])

   return (
      <header className={classes.Header}>
         <img className={classes.Image} src={image.replace('312x231', '636x393')} alt={image} />
         <section className={classes.Ingredients}>
            {selectedIngredients.map((ingred) => (
               <Ingredient
                  key={ingred.id}
                  name={ingred.name}
                  image={ingred.image}
                  unit={ingred.measures.metric.unitLong}
                  amount={ingred.measures.metric.amount}
               />
            ))}
         </section>
      </header>
   )
}

type HeaderTypes = {
   image: string
   ingredients: IngredientTypes[]
}

export default Header
