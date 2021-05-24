import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import classes from './HoverDrop.module.css'
import { Drop, Title, UnorderedList } from './HoverDropStyle'

const HoverDrop = ({dropOpen, nutrition}) => {
    const isLightTheme = useSelector(state => state.themeReducer.isLightTheme)
    const nodeRef = useRef(null)
    return (
        <CSSTransition
            in={dropOpen}
            appear
            nodeRef={nodeRef}
            timeout={600}  
            mountOnEnter        
            unmountOnExit
            classNames={{
                appear: classes.BackgroundAppear,
                appearActive: classes.BackgroundAppearActive,
                enter: classes.BackgroundEnter,
                enterActive: classes.BackgroundEnterActive,
                exit: classes.BackgroundExit,
                exitActive: classes.BackgroundExitActive,
            }}
        >
        <Drop lightTheme={isLightTheme} ref={nodeRef}>
            <Title>Nutrients</Title>
            <UnorderedList>
                {   nutrition &&
                    nutrition.nutrients.map(nutrient => 
                        {
                            /*(nutrient.name == "Fat" || nutrient.name == "Carbohydrates") &&*/
                            <li key={nutrient.name}>{nutrient.name}: {nutrient.amount}{nutrient.unit}</li>
                        }
                    )
                }
            </UnorderedList>
        </Drop>
        </CSSTransition>
    )
}

export default HoverDrop
