import React from 'react'
import classes from './BaseButton.module.css'

const BaseButton: React.FC<{ openClickEvent: React.MouseEventHandler }> = ({
    children,
    openClickEvent
}) => {
    return (
        <button className={classes.Btn} onClick={openClickEvent}>
            {children}
        </button>
    )
}

export default BaseButton
