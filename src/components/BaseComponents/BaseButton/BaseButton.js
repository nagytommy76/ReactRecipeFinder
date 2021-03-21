import React from 'react'
import PropTypes from 'prop-types'
import classes from './BaseButton.module.css'

const BaseButton = ({ buttonText }) => {
    return (
        <button className={classes.Btn}>{buttonText}</button>
    )
}

BaseButton.propTypes = {
    buttonText: PropTypes.string.isRequired
}

export default BaseButton
