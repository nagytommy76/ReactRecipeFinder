import React from 'react'
import { StyledCard } from './MenuCard'
import PropTypes from 'prop-types'

const MenuCard = ({ title, restaurantChain, image }) => {
    return (
        <StyledCard>
            <h1>{title}</h1>
            <h5>{restaurantChain}</h5>
            <img src={image} alt={title} />
        </StyledCard>
    )
}

MenuCard.propTypes = {
    title: PropTypes.string.isRequired,
    restaurantChain: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default MenuCard
