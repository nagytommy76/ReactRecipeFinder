import React, {useState, useEffect} from 'react'
import classes from './Instructions.module.css'

const Equipment = React.lazy(() => import(/*webpackChunkName: "Equipments"*/ './Equipment/Equipment'))
const StepDescription = React.lazy(() => import(/*webpackChunkName: "StepDescription"*/ './StepDescription/StepDescription'))

const Instructions = ({ steps }) => {
    const [selectedEquipments, setEquipments] = useState([])
    useEffect(() => {
        steps.map(step => {
            if(step.equipment.length > 0) step.equipment.forEach(equip => {
                // console.log(selectedEquipments.includes(equip.id))
                // console.log(selectedEquipments.includes(equip.id))
                if (!selectedEquipments.includes(equip.id)){
                    setEquipments(selectedEquipments => [...selectedEquipments, equip.id])
                    console.log(selectedEquipments)
                }
                // console.log(equip)
            })
            // console.log(step)
        })
        // console.log(selectedEquipments)
    },[])
    return (
        <section className={classes.Instructions}>
            <h1 className={classes.Title}>Equipments</h1>
            <section className={classes.EquipContainer}>
                {
                    steps.map((step, index) => (
                        step.equipment.length > 0 ?
                        <section key={index} className={classes.Equipments}>
                            {/* Később megoldani, hogy ha több tárgy szerepel itt akkor abból csak 1-et megjeleníteni! */}
                            <Equipment equipment={step.equipment[0]} /> 
                        </section>
                        : null
                    ))
                } 
            </section>
            <StepDescription steps={steps} />
        </section>
    )
}


export default Instructions
