import React from 'react'
import PropTypes from 'prop-types'
import classes from './BaseCard.module.css'

const BaseCard = ({ title, image, id }) => {
    return (
        <section className={classes.Card}>
            <h1>{title}</h1>
            <img srcSet={image} alt='dsads'/>
        </section>
    )
}

BaseCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default BaseCard
