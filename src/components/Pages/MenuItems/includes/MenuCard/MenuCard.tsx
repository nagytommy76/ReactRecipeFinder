import React, { useState } from 'react'
import { StyledCard, StyledImg, ImgContainer, TitleContainer, Title, SubTitle } from './MenuCardStyle'
import axios from 'axios'
import { MenuItemNutrition, MenuItemSearchResultType } from '../../../../../store/Slices/Types/MenuItemTypes'

const HoverDrop = React.lazy(() => import('./HoverDrop/HoverDrop'))

const MenuCard: React.FC<MenuItemSearchResultType> = ({ id, title, restaurantChain, image }) => {
   const [isDropOpen, setIsDropOpen] = useState(false)
   const [menuItemNutrition, setmMenuItemNutrition] = useState<MenuItemNutrition>()
   const getNutrients = async (itemId: number) => {
      if (menuItemNutrition === undefined) {
         await axios.get(`food/menuItems/${itemId}?${process.env.REACT_APP_API_KEY_QUERY}`).then((menuItem) => {
            setmMenuItemNutrition(menuItem.data.nutrition)
            setIsDropOpen(true)
         })
      }
      setIsDropOpen(!isDropOpen)
   }

   return (
      <StyledCard onClick={() => getNutrients(id)}>
         <HoverDrop dropOpen={isDropOpen} nutrition={menuItemNutrition} />
         <ImgContainer>
            <StyledImg src={image} alt={title} />
         </ImgContainer>
         <TitleContainer>
            <Title>{title}</Title>
            <SubTitle>{restaurantChain}</SubTitle>
         </TitleContainer>
      </StyledCard>
   )
}

export default MenuCard
