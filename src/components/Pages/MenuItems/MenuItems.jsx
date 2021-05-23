import React, {lazy} from 'react'
import { useSelector } from 'react-redux'
import { MenuItemsContainer, CardContainer } from './MenuStyle'

const MenuCard = lazy(() => import(/* webpackChunkName: "MenuCard" */'./includes/MenuCard/MenuCard.jsx'))
const SearchForm = lazy(() => import(/* webpackChunkName: "SearchForm" */'./includes/SearchForm/SearchForm'))

const MenuItems = () => {
    const menuItem = useSelector(state => state.menuItemReducer.menuItems)
    
    return (
        <MenuItemsContainer>
            <SearchForm />
            <CardContainer>
                {   menuItem.length > 0 ?
                    menuItem.map(item => (
                        <MenuCard
                            key={item.id}
                            title={item.title}
                            restaurantChain={item.restaurantChain}
                            image={item.image}
                        />
                    )) : <h1>Nothing to show</h1>
                }
            </CardContainer>
        </MenuItemsContainer>
    )
}

export default MenuItems
