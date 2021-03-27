import React from 'react'
import PropTypes from 'prop-types'
import classes from './Summary.module.css'

const Summary = ({ summary }) => {
    return (
        <p className={ classes.Summary } dangerouslySetInnerHTML={{__html: summary}}></p>
    )
}

Summary.propTypes = {
    summary: PropTypes.string.isRequired
}

export default Summary
