import React from 'react'
import PropTypes from 'prop-types'
import classes from './BaseButton.module.css'

const BaseButton = ({ buttonText, openClickEvent }) => {
    return (
        <button
            className={classes.Btn}
            onClick={openClickEvent}
        >
            {buttonText}
        </button>
    )
}

BaseButton.propTypes = {
    openClickEvent: PropTypes.func,
    buttonText: PropTypes.string.isRequired
}

export default BaseButton
