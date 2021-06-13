import React, { useRef } from 'react'
import { StyledParagraph } from './ErrorStyle'
import { CSSTransition } from 'react-transition-group'
import classes from './ErrorStyle.module.css'
import { useAppSelector } from '../../../app/hooks'

const BaseError: React.FC = () => {
   const errorText = useAppSelector((state) => state.errorReducer.errorText)
   const isError = useAppSelector((state) => state.errorReducer.isError)
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
            exitActive: classes.BackgroundExitActive
         }}>
         <StyledParagraph ref={nodeRef}>{errorText}</StyledParagraph>
      </CSSTransition>
   )
}

export default BaseError
