import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classes from './BaseCard.module.css'

import { Card } from './CardStyle'

const BaseCard = ({ customClickEvent, title, image, id, caloricBreakdown, isLightTheme}) => {
    return (
        <Card lightTheme={isLightTheme} onClick={customClickEvent}>
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
        </Card>
    )
}

BaseCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    caloricBreakdown: PropTypes.object.isRequired,
    customClickEvent: PropTypes.func
}

const mapStateToProps = state => {
    return {
        isLightTheme: state.themeReducer.isLightTheme
    }
}

export default connect(mapStateToProps)(BaseCard)