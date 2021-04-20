import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Summary as StyledSummary } from './SummaryStyle'

const Summary = ({ summary, isLightTheme }) => {
    return (
        <StyledSummary lightTheme={isLightTheme} dangerouslySetInnerHTML={{__html: summary}}></StyledSummary>
    )
}

Summary.propTypes = {
    summary: PropTypes.string.isRequired
}

const mapStateToProps = state => {
    return {
        isLightTheme: state.themeReducer.isLightTheme
    }
}

export default connect(mapStateToProps)(Summary)
