import styled from 'styled-components'

type Prop = { lightTheme: boolean }

export const Form = styled.form<Prop>`
   position: absolute;
   top: 30%;
   min-height: 390px;
   width: 330px;
   background-color: ${({ lightTheme }) => (lightTheme ? '#32343f' : '#4e5163')};
   flex: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
   border-radius: 10px;
   transition: background-color 0.3s linear;

   @media (max-width: 1900px) {
      margin: 10rem auto 1rem auto;
      position: relative;
      width: 400px;
   }
   @media (min-width: 1900px) {
      position: fixed;
      width: 330px;
   }

   @media (max-width: 500px) {
      width: 300px;
   }
`

export const Title = styled.h1`
   color: white;
   margin: 0.5rem 0;
`
