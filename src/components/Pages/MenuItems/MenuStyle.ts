import styled from 'styled-components'

export const Title = styled.h1`
   text-align: center;
   font-size: 3rem;
`

export const CardContainer = styled.section`
   width: 90%;
   display: grid;
   margin: auto;
   justify-content: center;
   grid-template-columns: repeat(3, 500px);
   column-gap: 1rem;
   row-gap: 3rem;
   @media (max-width: 1620px) {
      grid-template-columns: repeat(2, 500px);
   }
   @media (max-width: 1024px) {
      grid-template-columns: repeat(1, 500px);
   }
   @media (max-width: 500px) {
      row-gap: 5rem;
      grid-template-columns: repeat(1, 350px);
   }
`

export const MenuItemsContainer = styled.section`
   min-height: 100vh;
   margin: auto;
`
