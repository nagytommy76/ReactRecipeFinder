import React from 'react'
import { lazy } from 'react'
import { Container } from './VideosStyle'

const SearchForm = lazy(() => import(/* webpackChunkName: "SearchForm" */ './SearchForm/SearchForm'))
const CardContainer = lazy(() => import(/* webpackChunkName: "CardContainer" */ './CardContainer/CardContainer'))

const SearchVideos = () => {
    return (
        <Container>
            <SearchForm /> 
            <CardContainer />
        </Container>
    )
}

export default SearchVideos

