import React, { useRef, Suspense, lazy } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';

import modalClasses from './Modal.module.css'

const NutrientModal = lazy(() => import('../../../Pages/RecipeDetails/Includes/Nutrients/NutrientModal/NutrientModal'))

/**
 *  CSSTransition: 
 *      - Ha egy lazy loaded component-et akarok animálni kell a React.Suspense
 *      - illetve kell egy section vagy div ami körülöleli ( vagy forwardRef?! ) és be lehet állítani a ref-et
 **/

const Modal = ({ isModalOpen }) => {
    const nodeRef = useRef(null)
    return (
        <CSSTransition
            in={isModalOpen}
            appear
            nodeRef={nodeRef}
            timeout={700}
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
            <section ref={nodeRef} className={modalClasses.Modal}>
                <Suspense fallback={null}>
                    <NutrientModal />
                </Suspense>  
            </section>
        </CSSTransition>
    )
}

const mapStateToProps = state => {
    return {
        isModalOpen: state.modalReducer.isModalOpen
    }
}

export default connect(mapStateToProps)(Modal)