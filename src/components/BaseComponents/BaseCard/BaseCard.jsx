import React from 'react'
import PropTypes from 'prop-types'
import classes from './BaseCard.module.css'

const BaseCard = ({ customClickEvent, title, image, id, caloricBreakdown }) => {
    return (
        <article onClick={customClickEvent} className={classes.Card}>
            <header className={classes.ImageContainer}>
                <img className={classes.Image} srcSet={image} alt={id}/>
            </header>
            <section className={classes.Body}>
                <h1 className={classes.Title}>{title}</h1>
                <div className={classes.Calory}>
                    <p className={classes.PercentName}>
                        {caloricBreakdown.name}
                    </p>
                    <p className={classes.PercentValue}>
                        {caloricBreakdown.amount} {caloricBreakdown.unit}
                    </p>
                </div>
            </section>
        </article>
    )
}

BaseCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    caloricBreakdown: PropTypes.object.isRequired,
    customClickEvent: PropTypes.func
}

export default BaseCard
