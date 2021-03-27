import React from 'react'
import { Link } from 'react-router-dom'
import classes from './CardSection.module.css'
import { connect } from 'react-redux'
const Card = React.lazy(() =>import(/* webpackChunkName: "Card" */'../../../BaseComponents/BaseCard/BaseCard'))

const CardSection = ({ foods }) => {
    return (
        <section className={classes.CardContainer}>
            {
                foods.length > 0 ?
                foods.map(item => (
                    <Link to={`/details/${item.id}`} key={item.id}>
                        <Card 
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

export default connect(mapStateToProps)(CardSection)
