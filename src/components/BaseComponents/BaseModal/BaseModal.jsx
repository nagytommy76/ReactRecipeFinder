import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classes from './BaseModal.module.css'
import { CSSTransition } from 'react-transition-group';

const BaseModal = ({ onClose, children }) => {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        setIsOpen(true)
    },[])
    const closeModal = () => {
        onClose()
        setIsOpen(false)
    }
    return (
        <>
            <section className={classes.Background} onClick={closeModal}></section>
            <CSSTransition
                in={isOpen}
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
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
}

export default BaseModal
