import React, {lazy} from 'react'
import { useSelector } from 'react-redux'
import { Title, MenuItemsContainer, CardContainer } from './MenuStyle'

const MenuCard = lazy(() => import(/* webpackChunkName: "MenuCard" */'./includes/MenuCard/MenuCard.jsx'))
const SearchForm = lazy(() => import(/* webpackChunkName: "SearchForm" */'./includes/SearchForm/SearchForm'))

const MenuItems = () => {
    const menuItem = useSelector(state => state.menuItemReducer.menuItems)
    
    return (
        <MenuItemsContainer>
            <Title>Menu items</Title>
            <SearchForm />
            <CardContainer>
                {
                    menuItem.map(item => (
                        <MenuCard
                            key={item.id}
                            title={item.title}
                            restaurantChain={item.restaurantChain}
                            image={item.image}
                        />
                    ))
                }
            </CardContainer>
        </MenuItemsContainer>
    )
}

export default MenuItems
