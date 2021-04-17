import React, { useRef, Suspense, lazy } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';

import modalClasses from './Modal.module.css'

const NutrientModal = lazy(() => import('../../../Pages/RecipeDetails/Includes/Nutrients/NutrientModal/NutrientModal'))

const Modal = ({ isModalOpen }) => {
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
                <NutrientModal />
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
