import React from 'react'
// import { connect } from 'react-redux'
import classes from './SearchRecipes.module.css'

const CardSection = React.lazy(() => import('./Includes/CardSection'))

const SearchRecipes = () => {
    return (
        <section className={classes.Container}>
            <h1>SearchRecipes</h1>
            <CardSection/>
        </section>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         foods: state.foods
//     }
// }

// const mapDispatchToProps = dispatch =>{
//     return {
//         setSingleFood: () => dispatch()
//     }
// }

export default /*connect(mapStateToProps, mapDispatchToProps)*/(SearchRecipes)
