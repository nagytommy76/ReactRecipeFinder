import React, { lazy } from 'react'
import { useAppSelector } from '../../../app/hooks'
import { MenuItemsContainer, CardContainer } from './MenuStyle'

const MenuCard = lazy(() => import(/* webpackChunkName: "MenuCard" */ './includes/MenuCard/MenuCard'))
const SearchForm = lazy(() => import(/* webpackChunkName: "SearchForm" */ './includes/SearchForm/SearchForm'))

const MenuItems: React.FC = () => {
   const menuItem = useAppSelector((state) => state.menuItemReducer.menuItems)

   return (
      <MenuItemsContainer>
         <SearchForm />
         <CardContainer>
            {menuItem.length > 0 ? (
               menuItem.map((item) => (
                  <MenuCard
                     key={item.id}
                     id={item.id}
                     title={item.title}
                     restaurantChain={item.restaurantChain}
                     image={item.image}
                  />
               ))
            ) : (
               <h1>No results yet.</h1>
            )}
         </CardContainer>
      </MenuItemsContainer>
   )
}

export default MenuItems
