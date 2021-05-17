import React from 'react'
import classes from './Equipment.module.css'

const Equipment = ({ equipment }) => {
    return (
        <div key={equipment.id} className={classes.Equipment}>
            <img className={classes.Image} src={`https://spoonacular.com/cdn/equipment_100x100/${equipment.image}`} alt=""/>
            <p>{equipment.name}</p>
        </div>
    )
}

export default Equipment
