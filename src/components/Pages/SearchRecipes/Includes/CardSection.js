import React from 'react'
import { Link } from 'react-router-dom'
import classes from './CardSection.module.css'

import { connect } from 'react-redux'
import { setSelectedFoodId } from '../../../../store/Actions/Food'

const Card = React.lazy(() =>import(/* webpackChunkName: "Card" */'../../../BaseComponents/BaseCard/BaseCard'))

const CardSection = ({ foods, assignSelectedFoodId }) => {
    return (
        <section className={classes.CardContainer}>
            {
                foods.length > 0 ?
                foods.map(item => (
                    <Link to={`/details/${item.id}`} key={item.id}>
                        <Card 
                            customClickEvent={() => assignSelectedFoodId(item.id)}
                            title={item.title}
                            image={item.image}
                        />
                    </Link>
                )) : <h1>Nothing To show</h1>
            }
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        foods: state.foodReducer.foods
    }
}

const mapDispatchToProps = dispatch => {
    return {
        assignSelectedFoodId: (id) => dispatch(setSelectedFoodId(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardSection)
