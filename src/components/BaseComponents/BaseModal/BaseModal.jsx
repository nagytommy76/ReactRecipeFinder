import React, { useRef, lazy }  from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'
import classes from './BaseModal.module.css'
import modalClasses from './ModalTransition.module.css'
import { CSSTransition } from 'react-transition-group';

const ModalBackground = lazy(() => import(/* webapckChunkName: "ModalBackground" */'./ModalBackground/Background'))
/**
 * https://github.com/reactjs/react-transition-group/issues/152
 * 
 * V2: 
 * https://www.google.com/search?q=react+css+transition+appear+not+working+on+lazy+load&safe=off&biw=2560&bih=1297&sxsrf=ALeKk03EHNoFi_WNv_k3PUV2v3-BhE3upA%3A1618508790296&ei=9nt4YIXGEYuGwPAPm_6l0AI&oq=react+css+transition+appear+not+working+on+lazy+load&gs_lcp=Cgdnd3Mtd2l6EAMyBAghEBU6BwgAEEcQsAM6BQghEKABOggIIRAWEB0QHlCN3RxYhPYcYPj2HGgBcAJ4AYABmwSIAaAQkgEIMi4xMS41LTGYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=gws-wiz&ved=0ahUKEwiFmYuM54DwAhULAxAIHRt_CSoQ4dUDCA4&uact=5
 * 
 * https://github.com/reactjs/react-transition-group/issues/423
 *
 */

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
