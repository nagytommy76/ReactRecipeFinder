import React, { useState } from 'react'
import { StyledCard, StyledImg, ImgContainer, TitleContainer, Title, SubTitle } from './MenuCardStyle'
import axios from 'axios'
import { MenuItemNutrition, MenuItemSearchResultType } from '../../../../../store/Slices/Types/MenuItemTypes'
import BaseSpinner from '../../../../BaseComponents/BaseLoading/BasePageSpinner'
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks'
import { hideLoading, showLoading } from '../../../../../store/Slices/LoadingSlice'

const HoverDrop = React.lazy(() => import('./HoverDrop/HoverDrop'))

const MenuCard: React.FC<MenuItemSearchResultType> = ({ id, title, restaurantChain, image }) => {
   const dispatch = useAppDispatch()
   const [isDropOpen, setIsDropOpen] = useState(false)
   const [menuItemNutrition, setmMenuItemNutrition] = useState<MenuItemNutrition>()
   const isLoading = useAppSelector((state) => state.loadingReducer.loading)

   const getNutrients = async (itemId: number) => {
      if (menuItemNutrition === undefined) {
         dispatch(showLoading())
         await axios.get(`food/menuItems/${itemId}?${process.env.REACT_APP_API_KEY_QUERY}`).then((menuItem) => {
            setmMenuItemNutrition(menuItem.data.nutrition)
            setIsDropOpen(true)
            dispatch(hideLoading())
         })
      }
      setIsDropOpen(!isDropOpen)
   }
   // https://academind.com/tutorials/reactjs-a-custom-suspense-component/

   return (
      <React.Suspense fallback={<BaseSpinner isLoading={isLoading} />}>
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
      </React.Suspense>
   )
}

export default MenuCard
