import React from 'react'
import classes from './Instructions.module.css'

const Equipment = React.lazy(() => import(/*webpackChunkName: "Equipments"*/ './Equipment/Equipment'))
const StepDescription = React.lazy(() => import(/*webpackChunkName: "StepDescription"*/ './StepDescription/StepDescription'))

const Instructions = ({ instructions }) => {
    return (
        <section className={classes.Instructions}>
            <h1 className={classes.Title}>Istructions | Equipments</h1>
            <section className={classes.EquipContainer}>
                {
                    instructions.steps.map((step, index) => (
                        step.equipment.length > 0 ?
                        <section key={index} className={classes.Equipments}>
                            {/* Később megoldani, hogy ha több tárgy szerepel itt akkor abból csak 1-et megjeleníteni! */}
                            <Equipment equipment={step.equipment[0]} /> 
                        </section>
                        : null
                    ))
                } 
            </section>
            <StepDescription />
        </section>
    )
}


export default Instructions
