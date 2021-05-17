import React, { useState, useEffect, lazy } from 'react'
import classes from './Instructions.module.css'

const Equipment = lazy(() => import(/*webpackChunkName: "Equipments"*/ './Equipment/Equipment'))
const StepDescription = lazy(() => import(/*webpackChunkName: "StepDescription"*/ './StepDescription/StepDescription'))

const Instructions = ({ steps }) => {
    const [selectedEquipments, setSelectedEquipments] = useState([])
    useEffect(() => {
        if (selectedEquipments.length === 0) {
            // Kiválogatom az összes eszközt egy Array-be
            let templArr = []
            for (const step of steps) {
                if (step.equipment.length > 0) templArr.push(...step.equipment)
            }
            setSelectedEquipments(selectedEquipments => [
                ...selectedEquipments,
                // a kiválogatott arrayból egyesítem id szerint az object-eket  
                // YOUTUBE: https://www.youtube.com/watch?v=5JFJTGZ4gHQ&ab_channel=AllThingsJavaScript%2CLLC 
                ...templArr.reduce((map, equipmentObj) => map.set(equipmentObj.id, equipmentObj) ,new Map()).values()
            ])            
        }
    },[steps, selectedEquipments.length])
    return (
        <section className={classes.Instructions}>
            <h1 className={classes.Title}>Equipments</h1>
            <section className={classes.EquipContainer}>
                {
                    selectedEquipments.map(equip => (
                        <section key={equip.id} className={classes.Equipments}>
                            <Equipment equipment={equip} /> 
                        </section>
                    ))
                } 
            </section>
            <StepDescription steps={steps} />
        </section>
    )
}


export default Instructions
