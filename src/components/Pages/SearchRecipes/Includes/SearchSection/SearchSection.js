import React, {useState} from 'react'
import BaseInput from '../../../../BaseComponents/BaseInputs/BaseInput'
import classes from './SearchSection.module.css'

const SearchSection = () => {
    const sendRequest = (event) =>{
        console.log(foodName)
        console.log(includeIngeds)
        console.log(numberOfResults)
        event.preventDefault()
    }

    const [foodName, setFoodName] = useState('')
    const [includeIngeds, setIncludeIngreds] = useState('')
    const [numberOfResults, setNumberOfResults] = useState(10)

    return (
        <form className={classes.Form} onSubmit={sendRequest}>
            <BaseInput 
                labelText="Food name"
                value={foodName}
                eventOnChange={event => setFoodName(event.target.value)}
            />
            <BaseInput 
                labelText="Include ingredients"
                value={includeIngeds}
                eventOnChange={event => setIncludeIngreds(event.target.value)}
            />
            <BaseInput 
                labelText="Number of results"
                value={numberOfResults}
                eventOnChange={event => setNumberOfResults(event.target.value)}
                inputType='number'
            />
            <input type="submit" value="Indít"/>
        </form>
    )
}

export default SearchSection
