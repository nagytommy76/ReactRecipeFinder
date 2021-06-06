import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { Link } from 'react-router-dom'
import classes from './CardSection.module.css'

import { setSelectedFoodId } from '../../../../store/Slices/FoodSlice'

const Card = React.lazy(() => import(/* webpackChunkName: "Card" */ '../../../BaseComponents/BaseCard/BaseCard'))

const CardSection: React.FC = () => {
   const dispatch = useAppDispatch()
   const foods = useAppSelector((state) => state.foodReducer.foods)
   return (
      <section className={classes.CardContainer}>
         {foods.length > 0 ? (
            foods.map((item: any) => (
               <Link to={`/details/${item.id}`} key={item.id}>
                  <Card
                     customClickEvent={() => dispatch(setSelectedFoodId(item.id))}
                     title={item.title}
                     image={item.image.replace('312x231', '480x360')}
                     caloricBreakdown={item.nutrition.nutrients[0]}
                  />
               </Link>
            ))
         ) : (
            <h1>Nothing To show</h1>
         )}
      </section>
   )
}

export default CardSection
