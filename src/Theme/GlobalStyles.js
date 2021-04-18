import { createGlobalStyle  } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
body {
    font-family: 'Cabin', sans-serif;
    margin: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
}
`