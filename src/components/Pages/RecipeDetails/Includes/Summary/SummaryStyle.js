import styled from 'styled-components'

export const Summary = styled.p`
    width: 70%;
    margin: 3rem auto;
    padding: 1.5rem;
    cursor: default;
    text-align: justify;
    background-color: ${({ lightTheme }) => lightTheme ? '#f7f7f7' : '#666'};
`