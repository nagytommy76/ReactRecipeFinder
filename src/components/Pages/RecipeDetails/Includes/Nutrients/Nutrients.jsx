import React, { lazy } from 'react'

const BaseModal = lazy(() => import(/* webpackChunkName: "BaseModal" */ '../../../../BaseComponents/BaseModal/BaseModal'))
const NutrientModalItems = lazy(() => import(/* webpackChunkName: "NutrientModal" */ './NutrientModal/NutrientModal'))

const Nutrients = ({ nutrients }) => {
    return (
        <>
            <BaseModal children={
                <NutrientModalItems 
                    caloricBreakdown={nutrients.caloricBreakdown}
                    foodNutrients={nutrients.nutrients}
                />
            }/>
        </>
    )
}

export default Nutrients