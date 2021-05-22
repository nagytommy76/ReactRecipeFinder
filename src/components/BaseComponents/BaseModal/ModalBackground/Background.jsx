import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '../../../../store/Slices/ModalSlice'

import { CSSTransition } from 'react-transition-group';
import bgClasses from './Background.module.css'

const Background = () => {
    const nodeRef = useRef(null)
    const dispatch = useDispatch()
    const isModalOpen = useSelector(state => state.modalReducer.isModalOpen)
    return (
        <CSSTransition
            in={isModalOpen}
            appear
            nodeRef={nodeRef}
            timeout={600}  
            mountOnEnter        
            unmountOnExit
            classNames={{
                appear: bgClasses.BackgroundAppear,
                appearActive: bgClasses.BackgroundAppearActive,
                enter: bgClasses.BackgroundEnter,
                enterActive: bgClasses.BackgroundEnterActive,
                exit: bgClasses.BackgroundExit,
                exitActive: bgClasses.BackgroundExitActive,
            }}
        >
            <section ref={nodeRef} className={bgClasses.Background} onClick={() => dispatch(hideModal())}></section>
        </CSSTransition>
    )
}

export default Background
