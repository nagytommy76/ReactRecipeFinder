import styled from 'styled-components'

const textLightThemeColor = '#92C900'
const textDarkThemeColor = '#ffae00'

const fontSize = '1.3rem'
const fontWeight = '600'

export const Drop = styled.section`
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(6px);
    transition: all .2s linear;
    color: ${({lightTheme}) => lightTheme ? textLightThemeColor : textDarkThemeColor};
    &:hover{
        transform: scale(1.04);
    }
`

export const UnorderedList = styled.ul`
    list-style: none;
    padding: 1rem;
    margin: 0;
    font-size: ${fontSize};
    font-weight: ${fontWeight};
`

export const StyledParagraph = styled.p`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    margin: 0;
    padding-left: 1rem;
`

export const Note = styled.p`
    position: absolute;
    bottom: 0;
    right: 15px;
    font-style: italic;
`
