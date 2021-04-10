import React, { useRef }  from 'react'
import { connect } from 'react-redux'
import { hideModal } from '../../../store/Actions/Modal'

import PropTypes from 'prop-types'
import classes from './BaseModal.module.css'
import { CSSTransition } from 'react-transition-group';


const BaseModal = ({ isModalOpen, closeModal, children }) => {
    const nodeRef = useRef(null)
    return (
        <>
            <CSSTransition 
                nodeRef={nodeRef}
                in={isModalOpen}
                timeout={1000} 
                mountOnEnter           
                unmountOnExit 
                classNames={{
                    enter: classes.BackgroundEnter,
                    enterActive: classes.BackgroundEnterActive,
                    // enterDone: classes.exit,
                    exit: classes.exit,
                    exitActive: classes.exitActive,
                    // exitDone: classes.exitDone
                }}
            >
                <section className={classes.Background} onClick={closeModal}></section>
            </CSSTransition>
            {/* <CSSTransition
                nodeRef={nodeRef}
                in={isModalOpen}
                timeout={300}
                mountOnEnter
                unmountOnExit             
                classNames={{
                    appear: classes.modalEnter,
                    enter: classes.modalEnter,
                    enterActive: classes.modalEnterActive,
                    enterDone: classes.modalEntered,
                    exit: classes.modalExit,
                    exitActive: classes.modalExitActive,  
                    exitDone: classes.modalExitDone  
                }}
            >
                <div className={classes.Modal} ref={nodeRef}>
                    {children}
                </div>
            </CSSTransition> */}
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
