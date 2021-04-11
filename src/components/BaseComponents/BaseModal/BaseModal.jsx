import React, { useRef, lazy }  from 'react'
import { connect } from 'react-redux'
import { hideModal } from '../../../store/Actions/Modal'

import PropTypes from 'prop-types'
import classes from './BaseModal.module.css'
import { CSSTransition } from 'react-transition-group';

// import Background from './ModalBackground/Background'
const ModalBackground = lazy(() => import(/* webapckChunkName: "ModalBackground" */'./ModalBackground/Background'))

const BaseModal = ({ isModalOpen, closeModal, children }) => {
    const nodeRef = useRef(null)
    return (
        <>
            <ModalBackground />
            <CSSTransition
                nodeRef={nodeRef}
                in={isModalOpen}
                timeout={300}
                mountOnEnter
                unmountOnExit             
                classNames={{
                    enter: classes.modalEnter,
                    enterActive: classes.modalEnterActive,
                    exit: classes.modalExit,
                    exitActive: classes.modalExitActive,   
                }}
            >
                <div className={classes.Modal} ref={nodeRef}>
                    {children}
                </div>
            </CSSTransition>
        </>
    )
}

BaseModal.propTypes = {
    children: PropTypes.element.isRequired,
}

const mapDipatchToProps = dispatch => {
    return{
        closeModal: () => dispatch(hideModal())
    }
}

const mapStateToProps = state => {
    return {
        isModalOpen: state.modalReducer.isModalOpen
    }
}

export default connect(mapStateToProps, mapDipatchToProps)(BaseModal)
