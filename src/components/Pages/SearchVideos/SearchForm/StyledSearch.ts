import styled from 'styled-components'

type Prop = { lightTheme: boolean }

export const Form = styled.form<Prop>`
   position: relative;
   min-height: 350px;
   width: 400px;
   margin: 10rem auto 3rem auto;
   background-color: ${({ lightTheme }) => (lightTheme ? '#32343f' : '#4e5163')};
   display: flex;
   flex-direction: column;
   align-items: center;
   border-radius: 10px;
   transition: background-color 0.3s linear;

   @media (max-width: 500px) {
      width: 300px;
   }
`

export const Title = styled.h1`
   color: white;
   margin: 0.5rem 0;
`
