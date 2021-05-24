import React, { useState } from 'react'
import { StyledCard, StyledImg, ImgContainer, TitleContainer, Title, SubTitle } from './MenuCardStyle'
import PropTypes from 'prop-types'
import axios from 'axios'

const HoverDrop = React.lazy(() => import('./HoverDrop/HoverDrop'))

const MenuCard = ({ id, title, restaurantChain, image }) => {
    const [isDropOpen, setIsDropOpen] = useState(false)
    const [menuItemNutrition, setmMenuItemNutrition] = useState(null)
    const getNutrients = async (itemId) => {
        if (menuItemNutrition === null) {
            await axios.get(`food/menuItems/${itemId}?${process.env.REACT_APP_API_KEY_QUERY}`).then(menuItem => {
                console.log(menuItem)
                setmMenuItemNutrition(menuItem.data.nutrition)
                setIsDropOpen(true)
            })
        }
        setIsDropOpen(!isDropOpen)
    }

    return (
        <StyledCard onClick={() => getNutrients(id)}>
            <HoverDrop dropOpen={isDropOpen} nutrition={menuItemNutrition}/>
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

MenuCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    restaurantChain: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default MenuCard
