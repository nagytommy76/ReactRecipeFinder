import React from 'react'
import { StyledCard, StyledImg, ImgContainer, TitleContainer, Title, SubTitle } from './MenuCardStyle'
import PropTypes from 'prop-types'

const MenuCard = ({ title, restaurantChain, image }) => {
    return (
        <StyledCard>
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
    title: PropTypes.string.isRequired,
    restaurantChain: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default MenuCard
