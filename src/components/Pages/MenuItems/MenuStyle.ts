import styled from 'styled-components'

export const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
`

export const CardContainer = styled.section`
    width: 90%;
    display: grid;
    margin: auto;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
    row-gap: 3rem;
`

export const MenuItemsContainer = styled.section`
    min-height: 100vh;
`
