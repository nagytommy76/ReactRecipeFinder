import { ToggleContainer } from './ToggleContainer'
import { setDarkTheme, setLightTheme } from '../../../../store/Actions/Theme'
import { connect } from 'react-redux'

import { ReactComponent as Moon } from './icons/moon.svg'
import { ReactComponent as Sun } from './icons/sun.svg'

const Toggle = ({ currentTheme, darkTheme, lightTheme }) => {
    const toggleTheme = () => {
        currentTheme ? darkTheme() : lightTheme()
    }

    return (
        <ToggleContainer lightTheme={currentTheme} onClick={toggleTheme} >
            <Sun />
            <Moon />
        </ToggleContainer>
    )
}

const mapStateToProps = state => {
    return {
        currentTheme: state.themeReducer.isLightTheme
    }
}

const mapDispatchToProps = dispatch => {
    return {
        darkTheme: () => dispatch(setDarkTheme()),
        lightTheme: () => dispatch(setLightTheme())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toggle)