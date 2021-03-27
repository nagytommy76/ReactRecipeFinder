import React from 'react'
import PropTypes from 'prop-types'
import classes from './Ingredient.module.css'

const Ingredient = ({ name, image }) => {
    return (
        <article className={ classes.Ingredient }>
            <h3 className={ classes.Title }>{name}</h3>
            {
                image ? <img className={classes.Image} src={`https://spoonacular.com/cdn/ingredients_100x100/${image}`} alt=""/> :
                <img className={classes.Image} src='https://spoonacular.com/cdn/ingredients_100x100/apple.jpg' alt='' />
            }
        </article>
    )
}

Ingredient.propTypes = {
    name: PropTypes.string.isRequired
}

export default Ingredient
