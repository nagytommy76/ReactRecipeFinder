import React from 'react'
import { StyledToggle } from './ToggleContainer'
import { setDarkTheme, setLightTheme } from '../../../../store/Slices/ThemeSlice'

import { ReactComponent as Moon } from './icons/moon.svg'
import { ReactComponent as Sun } from './icons/sun.svg'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'

const Toggle: React.FC = () => {
   const dispatch = useAppDispatch()
   const currentTheme = useAppSelector((state) => state.themeReducer.isLightTheme)

   const toggleTheme = () => {
      currentTheme ? dispatch(setDarkTheme()) : dispatch(setLightTheme())
   }

   return (
      <StyledToggle data-testid='toggler' lightTheme={currentTheme} onClick={toggleTheme}>
         <Sun />
         <Moon />
      </StyledToggle>
   )
}

export default Toggle
