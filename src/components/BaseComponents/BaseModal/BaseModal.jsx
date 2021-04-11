import React, { useRef, lazy }  from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'
import classes from './BaseModal.module.css'
import modalClasses from './ModalTransition.module.css'
import { CSSTransition } from 'react-transition-group';

const ModalBackground = lazy(() => import(/* webapckChunkName: "ModalBackground" */'./ModalBackground/Background'))

const BaseModal = ({ isModalOpen, children }) => {
    const nodeRef = useRef(null)
    return (
        <>
            <ModalBackground />
            <CSSTransition
                appear={isModalOpen}
                nodeRef={nodeRef}
                in={isModalOpen}
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
        </>
    )
}

BaseModal.propTypes = {
    children: PropTypes.element.isRequired,
}

const mapStateToProps = state => {
    return {
        isModalOpen: state.modalReducer.isModalOpen
    }
}

export default connect(mapStateToProps)(BaseModal)
