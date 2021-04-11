import React from 'react'
import PropTypes from 'prop-types'
import classes from './SingleNutrient.module.css'

const SingleNutrient = ({ amount, name, percentOfDailyNeeds, unit }) => {
    return (
        <div className={classes.SingleNutrient}>
            <h4 className={classes.Title}>{name}</h4>
            <p className={classes.Text}>Amount: <span className={classes.Highlighted}>{amount} {unit}</span></p>
            <p className={classes.Text}><span className={classes.Highlighted}>{percentOfDailyNeeds}%</span> of daily needs</p>
        </div>
    )
}

SingleNutrient.propTypes = {
    amount: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    percentOfDailyNeeds: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired
}

export default SingleNutrient
