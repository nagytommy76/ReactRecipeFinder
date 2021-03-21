import React from 'react'
import PropTypes from 'prop-types'
import classes from './BaseInput.module.css'

const TextInput = ({ labelText, eventOnChange, value, inputType }) => {
    return (
        <div className={classes.FormControll}>
            <label className={classes.Label} htmlFor={labelText}>{labelText}</label>
            <input 
                className={classes.Input}
                id={labelText}
                value={value}
                onChange={eventOnChange}
                type={inputType}
            />
        </div>
    )
}

TextInput.propTypes = {
    labelText: PropTypes.string.isRequired,
    eventOnChange: PropTypes.func.isRequired,
    value: PropTypes.any,
    inputType: PropTypes.string
}

TextInput.defaultProps = {
    inputType: 'text'
}

export default TextInput
