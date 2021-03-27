import React from 'react'
import classes from './Header.module.css'

const Ingredient = React.lazy(() => import(/* webpackChunkName: "Ingredient" */ './Ingredient/Ingredient'))

const Header = ({ image, ingredients }) => {
    return (
        <header className={classes.Header}>
            <img className={classes.Image} src={image.replace('312x231', '636x393')} alt={image}/>
            <section className={classes.Ingredients}>
                {
                    ingredients.map(ingred => (
                        <Ingredient 
                            key={ ingred.id }
                            name={ingred.name}
                            image={ingred.image}
                        />
                    ))
                }
            </section>
        </header>
    )
}

export default Header
