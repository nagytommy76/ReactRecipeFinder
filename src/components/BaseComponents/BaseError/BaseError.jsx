import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { StyledParagraph } from './ErrorStyle'
import { CSSTransition } from 'react-transition-group';
import classes from './ErrorStyle.module.css'

const BaseError = () => {
    const errorText = useSelector(state => state.errorReducer.errorText)
    const isError = useSelector(state => state.errorReducer.isError)
    const nodeRef = useRef(null)
    return (
        <CSSTransition
            in={isError}
            appear
            nodeRef={nodeRef}
            timeout={600} 
            classNames={{
                appear: classes.BackgroundAppear,
                appearActive: classes.BackgroundAppearActive,
                enter: classes.BackgroundEnter,
                enterActive: classes.BackgroundEnterActive,
                exit: classes.BackgroundExit,
                exitActive: classes.BackgroundExitActive,
            }}
        >
            <StyledParagraph ref={nodeRef}>
                { errorText }
            </StyledParagraph>
        </CSSTransition>
    )
}

export default BaseError
