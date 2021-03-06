import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useAppSelector } from '../../../../../../app/hooks'
import { MenuItemNutrition } from '../../../../../../store/Slices/Types/MenuItemTypes'

import classes from './HoverDrop.module.css'
import { Drop, StyledParagraph, UnorderedList, Note } from './HoverDropStyle'

type Props = {
   dropOpen: boolean
   nutrition?: MenuItemNutrition
}

const HoverDrop: React.FC<Props> = ({ dropOpen, nutrition }) => {
   const isLightTheme = useAppSelector((state) => state.themeReducer.isLightTheme)
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
            exitActive: classes.BackgroundExitActive
         }}>
         <Drop lightTheme={isLightTheme} ref={nodeRef}>
            <UnorderedList>
               {nutrition &&
                  nutrition.nutrients.map(
                     (nutrient) =>
                        (nutrient.name === 'Protein' || nutrient.name === 'Cholesterol' || nutrient.name === 'Sugar') && (
                           <li key={nutrient.name}>
                              {nutrient.name}: {nutrient.amount}
                              {nutrient.unit} ({nutrient.percentOfDailyNeeds}%)*
                           </li>
                        )
                  )}
            </UnorderedList>
            {nutrition && <StyledParagraph>Calories: {nutrition.calories}kcal</StyledParagraph>}
            {nutrition && <StyledParagraph>Fat: {nutrition.fat}</StyledParagraph>}
            {nutrition && <StyledParagraph>Carbohydrates: {nutrition.carbs}</StyledParagraph>}
            <Note>*percent of daily needs</Note>
         </Drop>
      </CSSTransition>
   )
}

export default HoverDrop
