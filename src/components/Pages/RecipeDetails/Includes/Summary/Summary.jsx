import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Summary as StyledSummary } from './SummaryStyle'

const Summary = ({ summary }) => {
    const isLightTheme = useSelector(state => state.themeReducer.isLightTheme)
    return (
        <StyledSummary lightTheme={isLightTheme} dangerouslySetInnerHTML={{__html: summary}}></StyledSummary>
    )
}

Summary.propTypes = {
    summary: PropTypes.string.isRequired
}

export default Summary
