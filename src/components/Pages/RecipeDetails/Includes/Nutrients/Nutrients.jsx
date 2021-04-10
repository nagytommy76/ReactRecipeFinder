import React from 'react'
import { connect } from 'react-redux'
import { showModal } from '../../../../../store/Actions/Modal'

const BaseModal = React.lazy(() => import(/* webpackChunkName: "BaseModal" */ '../../../../BaseComponents/BaseModal/BaseModal'))
const NutrientModalItems = React.lazy(() => import(/* webpackChunkName: "NutrientModal" */ './NutrientModal/NutrientModal'))

const Nutrients = ({ nutrients, openModal }) => {
    return (
        <>
            <BaseModal children={
                <NutrientModalItems 
                caloricBreakdown={nutrients.caloricBreakdown}
                foodNutrients={nutrients.nutrients}
            />
            }/>
            <button onClick={openModal}>Nyit</button>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        openModal: () => dispatch(showModal())
    }
}

export default connect(null, mapDispatchToProps)(Nutrients)