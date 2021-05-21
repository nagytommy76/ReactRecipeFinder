import React from 'react'
import { StyledToggle } from './ToggleContainer'
import { useSelector, useDispatch } from 'react-redux'
import { setDarkTheme, setLightTheme } from '../../../../store/Slices/ThemeSlice'

import { ReactComponent as Moon } from './icons/moon.svg'
import { ReactComponent as Sun } from './icons/sun.svg'

const Toggle = () => {
    const dispatch = useDispatch()
    const currentTheme = useSelector(state => state.themeReducer.isLightTheme)

    const toggleTheme = () => {
        currentTheme ? dispatch(setDarkTheme()) : dispatch(setLightTheme())
    }

    return (
        <StyledToggle data-testid="toggler" lightTheme={currentTheme} onClick={toggleTheme} >
            <Sun />
            <Moon/>
        </StyledToggle>
    )
}

export default Toggle
