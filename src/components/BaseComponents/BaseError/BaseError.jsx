import React from 'react'
import { useSelector } from 'react-redux'
import { StyledParagraph } from './ErrorStyle'

const BaseError = () => {
    const errorText = useSelector(state => state.errorReducer.errorText)
    return (
        <StyledParagraph>
            { errorText }
        </StyledParagraph>
    )
}

export default BaseError
