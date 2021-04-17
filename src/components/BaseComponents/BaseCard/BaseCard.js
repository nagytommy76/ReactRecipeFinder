import React from 'react'
import PropTypes from 'prop-types'
import classes from './BaseCard.module.css'

const BaseCard = ({ customClickEvent, title, image, id }) => {
    return (
        <article onClick={customClickEvent} className={classes.Card}>
            <img className={classes.Image} srcSet={image} alt={id}/>
            <h1 className={classes.Title}>{title}</h1>
        </article>
    )
}

BaseCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    customClickEvent: PropTypes.func
}

export default BaseCard
