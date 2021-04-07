import React from 'react'
import { connect } from 'react-redux'
import { showModal } from '../../../../../store/Actions/Modal'
import { CSSTransition } from 'react-transition-group';
import classes from './Nutrients.module.css'

const NutrientModal = React.lazy(() => import(/* webpackChunkName: "NutrientModal" */ './NutrientModal/NutrientModal'))

const Nutrients = ({ nutrients, isModalOpen, openModal }) => {
    return (
        <>
            <CSSTransition 
            in={isModalOpen}
            timeout={400} 
            unmountOnExit
            mountOnEnter
            classNames={{
                appear: classes.Appear,
                enter: classes.enter,
                enterActive: classes.enterActive,
                enterDone: classes.exit,
                exit: classes.exit,
                exitActive: classes.exitActive,
                exitDone: classes.exitDone
            }}>
                <NutrientModal 
                    caloricBreakdown={nutrients.caloricBreakdown}
                    foodNutrients={nutrients.nutrients}
                />
            </CSSTransition>
            <button onClick={openModal}>Nyit</button>
        </>
    )
}

const mapStateToPtops = state => {
    return {
        isModalOpen: state.modalReducer.isModalOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openModal: () => dispatch(showModal())
    }
}

export default connect(mapStateToPtops, mapDispatchToProps)(Nutrients)