import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import classes from './Nutrients.module.css'

const duration = 1000

const Nutrients = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <CSSTransition in={isOpen} timeout={duration} classNames={{
                appear: classes.Appear,
                enter: classes.enter,
                enterActive: classes.enterActive,
                exit: classes.exit,
                exitActive: classes.exitActive,
                exitDone: classes.exitDone
            }}>
                <p>HELLÓ</p>
            </CSSTransition>
            <button onClick={() => setIsOpen(!isOpen)}>Nyit</button>
        </>
    )
}

export default Nutrients