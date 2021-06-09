import styled from 'styled-components'

type Prop = { thumbnailImg: string | undefined }

export const StyledArticle = styled.article<Prop>`
   background-image: url(${(props) => props.thumbnailImg});
   background-repeat: no-repeat;
   background-size: cover;
   width: 450px;
   height: 280px;

   transition: all 0.2s linear;
   &:hover {
      transform: translateY(-5px);
      box-shadow: 1px 1px 20px #111;
   }

   @media (max-width: 500px) {
      width: 330px;
   }
`

export const Title = styled.h1`
   position: absolute;
   text-align: justify;
   right: 5px;
   bottom: 5px;
   padding: 0.5rem;
   margin: 0.5rem 0;
   font-size: 2.5rem;
   color: #fff;

   @media (max-width: 940px) {
      font-size: 2rem;
   }
`

export const Overlay = styled.section`
   position: relative;
   width: 100%;
   height: 100%;
   transition: background-color 0.2s linear;
   background-color: rgba(40, 40, 41, 0.4);

   &:hover {
      background-color: rgba(40, 40, 41, 0.8);
   }
`
