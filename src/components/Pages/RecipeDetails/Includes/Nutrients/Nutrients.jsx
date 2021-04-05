import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import classes from './Nutrients.module.css'

const NutrientModal = React.lazy(() => import(/* webpackChunkName: "NutrientModal" */ './NutrientModal/NutrientModal'))

const Nutrients = ({ nutrients }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <CSSTransition 
            in={isOpen}
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
                    onClose={() => setIsOpen(false)}
                    caloricBreakdown={nutrients.caloricBreakdown}
                    foodNutrients={nutrients.nutrients}
                />
            </CSSTransition>
            <button onClick={() => setIsOpen(!isOpen)}>Nyit</button>
        </>
    )
}

export default Nutrients