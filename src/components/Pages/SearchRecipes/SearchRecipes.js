import React from 'react'
import classes from './SearchRecipes.module.css'

const CardSection = React.lazy(() => import(/* webpackChunkName: "CardSection" */'./Includes/CardSection'))
const SearchSection = React.lazy(() => import (/* webpackChunkName: "SearchSection" */ './Includes/SearchSection/SearchSection.jsx'))

const SearchRecipes = () => {
    return (
        <section className={classes.Container}>
            <SearchSection />
            <CardSection/>
        </section>
    )
}

export default SearchRecipes