import React from 'react'
import { connect } from 'react-redux'
import { hideModal } from '../../../store/Actions/Modal'

import PropTypes from 'prop-types'
import classes from './BaseModal.module.css'
import { CSSTransition } from 'react-transition-group';


const BaseModal = ({ isModalOpen, closeModal, children }) => {
    return (
        <>
            <section className={classes.Background} onClick={closeModal}></section>
            <CSSTransition
                in={isModalOpen}
                timeout={600}
                mountOnEnter
                unmountOnExit             
                classNames={{
                    enter: classes.modalEnter,
                    enterActive: classes.modalEnterActive,
                    enterDone: classes.modalEntered,
                    exit: classes.modalExit,
                    exitActive: classes.modalExitActive,  
                    exitDone: classes.modalExitDone  
                }}
            >
                <>
                    {children}
                </>
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
