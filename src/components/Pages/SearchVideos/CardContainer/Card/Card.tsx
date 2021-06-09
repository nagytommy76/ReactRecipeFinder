import React from 'react'
import { StyledArticle, Overlay, Title } from './CardStyle'

const Card: React.FC<CardProp> = ({ title, thumbnail }) => {
   return (
      <StyledArticle thumbnailImg={thumbnail}>
         <Overlay>
            <Title>{title}</Title>
         </Overlay>
      </StyledArticle>
   )
}

type CardProp = {
   title: string | undefined
   thumbnail: string | undefined
}

export default Card
