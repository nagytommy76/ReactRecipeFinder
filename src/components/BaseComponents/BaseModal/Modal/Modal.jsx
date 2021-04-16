import React, { useRef, Suspense } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';

import modalClasses from './Modal.module.css'
import classes from '../BaseModal.module.css'

const Modal = ({ children, isModalOpen }) => {
    const nodeRef = useRef(null)
    return (
        <Suspense fallback={null}>
            <CSSTransition
                in={isModalOpen}
                appear
                nodeRef={nodeRef}
                timeout={600}
                mountOnEnter
                unmountOnExit             
                classNames={{
                    appear: modalClasses.modalAppear,
                    appearActive: modalClasses.modalAppearActive,
                    enter: modalClasses.modalEnter,
                    enterActive: modalClasses.modalEnterActive,
                    exit: modalClasses.modalExit,
                    exitActive: modalClasses.modalExitActive,   
                }}
            >
                <section className={classes.Modal} ref={nodeRef}>
                    {children}
                </section>
            </CSSTransition>
        </Suspense>
    )
}

const mapStateToProps = state => {
    return {
        isModalOpen: state.modalReducer.isModalOpen
    }
}

export default connect(mapStateToProps)(Modal)
