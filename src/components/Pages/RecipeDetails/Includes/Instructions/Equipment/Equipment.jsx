import classes from './Equipment.module.css'
import PropTypes from 'prop-types'

const Equipment = ({ equipment }) => {
    return (
        <div key={equipment.id} className={classes.Equipment}>
            <img className={classes.Image} src={`https://spoonacular.com/cdn/equipment_100x100/${equipment.image}`} alt=""/>
            <p>{equipment.name}</p>
        </div>
    )
}

Equipment.propTypes = {
    equipment: PropTypes.array.isRequired
}

export default Equipment
