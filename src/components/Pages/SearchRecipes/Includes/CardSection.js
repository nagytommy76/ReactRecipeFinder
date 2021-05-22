import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import classes from './CardSection.module.css'

import { setSelectedFoodId } from '../../../../store/Slices/FoodSlice'

const Card = React.lazy(() =>import(/* webpackChunkName: "Card" */'../../../BaseComponents/BaseCard/BaseCard.jsx'))

const CardSection = () => {
    const dispatch = useDispatch()
    const foods = useSelector(state => state.foodReducer.foods)
    return (
        <section className={classes.CardContainer}>
            {
                foods.length > 0 ?
                foods.map(item => (
                    <Link to={`/details/${item.id}`} key={item.id}>
                        <Card 
                            customClickEvent={() => dispatch(setSelectedFoodId(item.id))}
                            title={item.title}
                            image={item.image.replace('312x231', '480x360')}
                            caloricBreakdown={item.nutrition.nutrients[0]}
                        />
                    </Link>
                )) : <h1>Nothing To show</h1>
            }
        </section>
    )
}

export default CardSection
