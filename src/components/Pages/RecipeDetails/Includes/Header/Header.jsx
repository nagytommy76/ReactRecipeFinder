import React, { useState, useEffect } from 'react'
import classes from './Header.module.css'

const Ingredient = React.lazy(() => import(/* webpackChunkName: "Ingredient" */ './Ingredient/Ingredient'))

const Header = ({ image, ingredients }) => {
    const [selectedIngredients, setSelectedIngredients] = useState([])
    useEffect(() => {
        if (selectedIngredients.length === 0) {
            setSelectedIngredients(selectedIngredients => [
                ...selectedIngredients,
                // a kiválogatott arrayból egyesítem id szerint az object-eket  
                // YOUTUBE: https://www.youtube.com/watch?v=5JFJTGZ4gHQ&ab_channel=AllThingsJavaScript%2CLLC 
                ...ingredients.reduce((map, obj) => map.set(obj.id, obj) ,new Map()).values()
            ]) 
        }
    }, [])

    useEffect(() => console.log(selectedIngredients))

    return (
        <header className={classes.Header}>
            <img className={classes.Image} src={image.replace('312x231', '636x393')} alt={image}/>
            <section className={classes.Ingredients}>
                {
                    selectedIngredients.map(ingred => (
                        <Ingredient 
                            key={ ingred.id }
                            name={ingred.name}
                            image={ingred.image}
                            unit={ ingred.measures.metric.unitLong }
                            amount={ ingred.measures.metric.amount }
                        />
                    ))
                }
            </section>
        </header>
    )
}

export default Header
