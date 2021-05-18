import React, {lazy} from 'react'
import { Title, MenuItemsContainer, CardContainer } from './MenuStyle'

const MenuCard = lazy(() => import(/* webpackChunkName: "MenuCard" */'./includes/MenuCard/MenuCard.jsx'))

const result = {
    menuItems: [
        {
            id: 419357,
            title: "Burger Sliders",
            restaurantChain: "Hooters",
            image: "https://images.spoonacular.com/file/wximages/419357-312x231.png",
            imageType: "png",
            readableServingSize: null,
            servingSize: null
        },
        {
            id: 424571,
            title: "Bacon King Burger",
            restaurantChain: "Burger King",
            image: "https://images.spoonacular.com/file/wximages/424571-312x231.png",
            imageType: "png",
            readableServingSize: null,
            servingSize: null
        }
    ],
    totalMenuItems: 6749,
    type: "menuItem",
    offset: 0,
    number: 2
}

const MenuItems = () => {
    return (
        <MenuItemsContainer>
            <Title>Menu items</Title>
            <CardContainer>
                {
                    result.menuItems.map(item => (
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
