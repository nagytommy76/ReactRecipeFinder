import React from 'react'
import PropTypes from 'prop-types'
import classes from './BaseInput.module.css'

const BaseInput = ({ labelText, eventOnChange, value, inputType }) => {
    return (
        <div className={classes.FormControll}>
            <label role="label" className={classes.Label} htmlFor={labelText}>{labelText}</label>
            <input 
                role="input"
                data-testid="input"
                className={classes.Input}
                id={labelText}
                value={value}
                onChange={eventOnChange}
                type={inputType}
            />
        </div>
    )
}

BaseInput.propTypes = {
    labelText: PropTypes.string.isRequired,
    eventOnChange: PropTypes.func.isRequired,
    value: PropTypes.any,
    inputType: PropTypes.string
}

BaseInput.defaultProps = {
    inputType: 'text'
}

export default BaseInput
