import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import classes from './BaseInput.module.css'

const Error = React.lazy(() => import('../BaseError/BaseError'))

const BaseInput = ({ labelText, eventOnChange, value, inputType, displayError }) => {
    const isError = useSelector(state => state.errorReducer.isError)
    return (
        <div className={classes.FormControll}>
            <label role="label" className={classes.Label} htmlFor={labelText}>{labelText}</label>
            <input 
                role="input"
                placeholder={labelText}
                data-testid="input"
                className={classes.Input}
                id={labelText}
                value={value}
                onChange={eventOnChange}
                type={inputType}
            />
            { ( isError && displayError ) && <Error /> }
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
    inputType: 'text',
    displayError: false
}

export default BaseInput
