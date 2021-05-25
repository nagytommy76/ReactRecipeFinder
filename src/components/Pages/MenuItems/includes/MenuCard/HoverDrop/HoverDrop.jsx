import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import classes from './HoverDrop.module.css'
import { Drop, StyledParagraph, UnorderedList, Note } from './HoverDropStyle'

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
            <UnorderedList>
                {   nutrition &&
                    nutrition.nutrients.map(nutrient => 
                        (
                            (nutrient.name == "Protein" ||
                            nutrient.name == "Cholesterol" ||
                            nutrient.name == "Sugar") &&
                            <li key={nutrient.name}>
                                {nutrient.name}: {nutrient.amount}{nutrient.unit} ({nutrient.percentOfDailyNeeds}%)*
                            </li>
                        )
                    )
                }
            </UnorderedList>   
            { nutrition && <StyledParagraph>Calories: { nutrition.calories }kcal</StyledParagraph> }
            { nutrition &&   <StyledParagraph>Fat: { nutrition.fat }g</StyledParagraph> }
            { nutrition && <StyledParagraph>Carbohydrates: { nutrition.carbs }g</StyledParagraph> }
            <Note>*percent of daily needs</Note>
        </Drop>
        </CSSTransition>
    )
}

export default HoverDrop
