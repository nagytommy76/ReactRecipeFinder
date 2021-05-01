import React from 'react'
import PropTypes from 'prop-types'
import classes from './BaseButton.module.css'

const BaseButton = ({ children, openClickEvent }) => {
    return (
        <button
            className={classes.Btn}
            onClick={openClickEvent}
        >
            {children}
        </button>
    )
}

BaseButton.propTypes = {
    openClickEvent: PropTypes.func
}

export default BaseButton
