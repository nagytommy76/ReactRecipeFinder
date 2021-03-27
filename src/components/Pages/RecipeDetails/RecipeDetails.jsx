import React from 'react'
import { connect } from 'react-redux'
import { makeGetSingleFoodState } from '../../../store/selectors'
import classes from './RecipeDetails.module.css'

const DetailHeader = React.lazy(() => import(/* webpackChunkName: "DetailHeader" */'./Includes/Header/Header'))
const Summary = React.lazy(() => import(/* webpackChunkName: "Summary" */'./Includes/Summary/Summary'))

const RecipeDetails = ({ singleFood }) => {
    return (
        <section>
            <h1 className={ classes.Title }>{singleFood.title}</h1>
            <DetailHeader 
                image={ singleFood.image }
                ingredients={ singleFood.extendedIngredients }
            />
            <Summary summary={singleFood.summary}/>
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
