import React from 'react'
import { connect } from 'react-redux'
import classes from './SearchRecipes.module.css'
import { getFoodsBySearchParameters } from '../../../store/Actions/Food'

const CardSection = React.lazy(() => import(/* webpackChunkName: "CardSection" */'./Includes/CardSection'))
const SearchSection = React.lazy(() => import (/* webpackChunkName: "SearchSection" */ './Includes/SearchSection/SearchSection'))

const SearchRecipes = ({ getFoods }) => {
    return (
        <section className={classes.Container}>
            <h1>SearchRecipes</h1>
            <SearchSection />
            <CardSection/>
            <button onClick={getFoods}>dfgfdf</button>
        </section>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         foods: state.foods
//     }
// }

const mapDispatchToProps = dispatch =>{
    return {
        getFoods: () => dispatch(getFoodsBySearchParameters({foodName : 'chciken'}))
    }
}

export default connect(null, mapDispatchToProps)(SearchRecipes)