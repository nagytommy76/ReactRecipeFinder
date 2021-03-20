import React from 'react'
import classes from './CardSection.module.css'
import { connect } from 'react-redux'
const Card = React.lazy(() =>import('../../../BaseComponents/BaseCard/BaseCard'))

const CardSection = ({ foods }) => {
    return (
        <section className={classes.CardContainer}>
            {
                foods.map(item => (
                    <Card 
                        key={item.id}
                        title={item.title}
                        image={item.image}
                    />
                ))
            }
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        foods: state.foods
    }
}

export default connect(mapStateToProps)(CardSection)
