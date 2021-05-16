import React from 'react'
import PropTypes from 'prop-types'
import { StyledArticle, Overlay, Title } from './CardStyle'

const Card = ({ title, thumbnail }) => {
    return (
        <StyledArticle thumbnailImg={thumbnail}>
            <Overlay>
                <Title>{title}</Title>
            </Overlay>
        </StyledArticle>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Card