import { useRef, Suspense } from 'react'
import { connect } from 'react-redux'
import { hideModal } from '../../../../store/Actions/Modal'

import { CSSTransition } from 'react-transition-group';
import bgClasses from './Background.module.css'

const Background = ({ isModalOpen, closeModal }) => {
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
                    appear: bgClasses.BackgroundAppear,
                    appearActive: bgClasses.BackgroundAppearActive,
                    enter: bgClasses.BackgroundEnter,
                    enterActive: bgClasses.BackgroundEnterActive,
                    exit: bgClasses.BackgroundExit,
                    exitActive: bgClasses.BackgroundExitActive,
                }}
            >
                <section ref={nodeRef} className={bgClasses.Background} onClick={closeModal}></section>
            </CSSTransition>
        </Suspense>
    )
}

const mapStateToProps = state => {
    return {
        isModalOpen: state.modalReducer.isModalOpen
    }
}

const mapDipatchToProps = dispatch => {
    return{
        closeModal: () => dispatch(hideModal())
    }
}

export default connect(mapStateToProps, mapDipatchToProps)(Background)
