import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle<{ theme: { body: string; text: string } }>`
body {
    font-family: 'Cabin', sans-serif;
    margin: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background-color .3s linear;
}
`
