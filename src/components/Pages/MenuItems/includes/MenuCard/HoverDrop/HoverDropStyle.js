import styled from 'styled-components'

const textLightThemeColor = '#92C900'
const textDarkThemeColor = '#ffae00'

export const Drop = styled.section`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, .05);
    backdrop-filter: blur(4px);
    color: ${({lightTheme}) => lightTheme ? textLightThemeColor : textDarkThemeColor};
`

export const Title = styled.h1`
    font-size: 2rem;
    text-align: center;
    margin: .5rem 0 .5rem 0;
`

export const UnorderedList = styled.ul`
    list-style: none;
    padding: 1rem;
    font-size: 1.3rem;
    font-weight: 600;
    text-align: right;
`
