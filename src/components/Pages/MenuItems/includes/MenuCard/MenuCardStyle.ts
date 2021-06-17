import styled from 'styled-components'

export const StyledCard = styled.article`
   width: 500px;
   height: 231px;
   display: flex;
   flex-direction: row;
   transition: all 0.2s linear;
   position: relative;
   cursor: pointer;
   /* https://www.google.com/search?q=css+blur+scale+bug&oq=css+blur+scale+bug&aqs=chrome..69i57j69i64.7809j0j7&sourceid=chrome&ie=UTF-8 */
   &:hover {
      box-shadow: 1px 1px 35px #000;
   }
   @media (max-width: 500px) {
      flex-direction: column;
      width: 350px;
      height: 400px;
      justify-content: center;
      align-items: center;
   }
`
// Image

export const StyledImg = styled.img`
   width: 100%;
   height: 100%;
`

export const ImgContainer = styled.aside`
   width: 60%;
`

// Title

export const TitleContainer = styled.section`
   width: 40%;
   padding-left: 0.7rem;
   @media (max-width: 500px) {
      padding-left: 0;
   }
`

export const Title = styled.h1`
   font-size: 1.7rem;
   margin: 0.5rem 0 0.5rem 0;
`

export const SubTitle = styled.h5`
   font-size: 1.1rem;
   margin: 1rem 0 0.5rem 0;
`
