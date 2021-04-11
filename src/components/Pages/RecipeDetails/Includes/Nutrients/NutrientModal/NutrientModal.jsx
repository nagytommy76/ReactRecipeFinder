import React from 'react'
import PropTypes from 'prop-types'
import classes from './NutrientModal.module.css'

const SingleNutrient = React.lazy(() => import(/* webpackChunkName: "SingleNutrient" */ './Includes/SingleNutrient'))

const NutrientModal = ({ caloricBreakdown, foodNutrients }) => {
    return (
        <>
            <header className={classes.Header}>
                <h1 className={classes.Title}>Food Nutrients</h1>
                <h4 className={classes.Calory}>
                    <span className={classes.Highlighted}>{caloricBreakdown.percentCarbs}%</span> of daily carbs needs
                </h4>
                <h4 className={classes.Calory}>
                    <span className={classes.Highlighted}>{caloricBreakdown.percentFat}%</span> of daily fat needs
                </h4>
                <h4 className={classes.Calory}>
                    <span className={classes.Highlighted}>{caloricBreakdown.percentProtein}%</span> of daily protein needs
                </h4>
            </header>
            <section className={classes.Body}>
                {
                    foodNutrients.map((nutrient, index) => (
                        nutrient.amount !== 0 ? 
                            <SingleNutrient key={index} 
                                amount={nutrient.amount}
                                name={nutrient.name}
                                percentOfDailyNeeds={nutrient.percentOfDailyNeeds}
                                unit={nutrient.unit}
                            />
                        : null                                  
                    ))
                }
            </section>
        </>
    )
}

NutrientModal.propTypes = {
    caloricBreakdown: PropTypes.object.isRequired,
    foodNutrients: PropTypes.array.isRequired,
}

export default NutrientModal
