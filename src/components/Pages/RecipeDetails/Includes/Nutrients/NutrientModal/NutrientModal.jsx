import React from 'react'
import PropTypes from 'prop-types'
import classes from './NutrientModal.module.css'

const BaseModal = React.lazy(() => import(/* webpackChunkName: "BaseModal" */ '../../../../../BaseComponents/BaseModal/BaseModal'))
const SingleNutrient = React.lazy(() => import(/* webpackChunkName: "SingleNutrient" */ './Includes/SingleNutrient'))

const NutrientModal = ({ onClose, caloricBreakdown, foodNutrients }) => {
    return (
        <>
            <BaseModal 
                onClose={onClose}
                children={(
                    <section className={classes.Modal}>
                        <header className={classes.Header}>
                            <h1 className={classes.Title}>Food Nutrients</h1>
                            <h4 className={classes.Calory}>{caloricBreakdown.percentCarbs}% of daily needs</h4>
                            <h4 className={classes.Calory}>{caloricBreakdown.percentFat}% of daily needs</h4>
                            <h4 className={classes.Calory}>{caloricBreakdown.percentProtein}% of daily needs</h4>
                        </header>
                        <section className={classes.Body}>
                            {
                                foodNutrients.map((nutrient, index) => (
                                    nutrient.amount !== 0 ? 
                                        <SingleNutrient key={index} 
                                            amount={nutrient.amount}
                                            name={nutrient.name}
                                            percentOfDailyNeeds={nutrient.percentOfDailyNeeds}
                                            unit={nutrient.amount}
                                        />
                                    : null                                  
                                ))
                            }
                        </section>
                        <footer className={classes.Footer}>
                            footer
                        </footer>
                </section>
                )}
            />
        </>
    )
}

NutrientModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    caloricBreakdown: PropTypes.object.isRequired,
    foodNutrients: PropTypes.array.isRequired,
}

export default NutrientModal
