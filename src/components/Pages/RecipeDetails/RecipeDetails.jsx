import React from 'react'
import { connect } from 'react-redux'
import { makeGetSingleFoodState } from '../../../store/selectors'
import classes from './RecipeDetails.module.css'

const DetailHeader = React.lazy(() => import(/* webpackChunkName: "DetailHeader" */'./Includes/Header/Header'))
const Summary = React.lazy(() => import(/* webpackChunkName: "Summary" */'./Includes/Summary/Summary'))
const Instructions = React.lazy(() => import(/* webpackChunkName: "AnalizedInstructions" */ './Includes/Instructions/Instructions'))

const RecipeDetails = ({ singleFood }) => {
    return (
        <section className={ classes.RecipeDetails }>
            <h1 className={ classes.Title }>{singleFood.title}</h1>
            <DetailHeader 
                image={ singleFood.image }
                ingredients={ singleFood.extendedIngredients }
            />
            <Summary summary={singleFood.summary}/>
            { 
                singleFood.analyzedInstructions ? 
                <Instructions steps={singleFood.analyzedInstructions[0].steps} /> 
                : null 
            }
            
        </section>
    )
}

const makeMapStateToProps = () => {
    const getFoodState = makeGetSingleFoodState()
    const mapStateToProps = (state, { match }) => {
        return{
            singleFood: getFoodState(state, parseInt(match.params.recipeId))
        }
    }
    return mapStateToProps
}

export default connect(makeMapStateToProps)(RecipeDetails)
