import { lazy } from 'react'
import { connect } from 'react-redux'
import { makeGetSingleFoodState } from '../../../store/selectors'
import { showModal } from '../../../store/Actions/Modal'

import classes from './RecipeDetails.module.css'

const Button = lazy(() => import(/* webpackChunkName: "BaseButton" */ '../../BaseComponents/BaseButton/BaseButton'))
const DetailHeader = lazy(() => import(/* webpackChunkName: "DetailHeader" */'./Includes/Header/Header'))
const Summary = lazy(() => import(/* webpackChunkName: "Summary" */'./Includes/Summary/Summary'))
const Instructions = lazy(() => import(/* webpackChunkName: "AnalizedInstructions" */ './Includes/Instructions/Instructions'))
const NutrientsModal = lazy(() => import(/* webpackChunkName: "NutrientsModal" */ './Includes/Nutrients/Nutrients.jsx'))

const RecipeDetails = ({ singleFood, openModal }) => {
    return (
        <section className={ classes.RecipeDetails }>
            <h1 className={ classes.Title }>{singleFood.title}</h1>
            <DetailHeader 
                image={ singleFood.image }
                ingredients={ singleFood.extendedIngredients }
            />
            <section className={classes.ButtonContainer}>
                <Button 
                    openClickEvent={openModal}
                    buttonText="Show food nutrients"
                />
            </section>
            <Summary summary={singleFood.summary}/>
            { 
                singleFood.analyzedInstructions[0] ? 
                <Instructions steps={singleFood.analyzedInstructions[0].steps} /> 
                : null 
            }
            <NutrientsModal />
        </section>
    )
}

const makeMapStateToProps = () => {
    const getFoodState = makeGetSingleFoodState()
    const mapStateToProps = (state) => {
        return{
            singleFood: getFoodState(state),
        }
    }
    return mapStateToProps
}

const mapDispatchToProps = dispatch => {
    return{
        openModal: () => dispatch(showModal())
    }
}

export default connect(makeMapStateToProps, mapDispatchToProps)(RecipeDetails)
