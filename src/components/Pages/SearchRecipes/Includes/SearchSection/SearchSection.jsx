import React, {useState} from 'react'
// import classes from './SearchSection.module.css'
import { connect } from 'react-redux'
import { getFoodsBySearchParameters } from '../../../../../store/Actions/Food'

import { Form, Title } from './StyledSearch'

const Button = React.lazy(() => import(/* webpackChunkName: "BaseButton" */ '../../../../BaseComponents/BaseButton/BaseButton.jsx'))
const BaseInput = React.lazy(() => import(/* webpackChunkName: "BaseInput" */'../../../../BaseComponents/BaseInputs/BaseInput'))

const SearchSection = ({ getFoods }) => {
    const [foodName, setFoodName] = useState('')
    const [includeIngreds, setIncludeIngreds] = useState('')
    const [numberOfResults, setNumberOfResults] = useState(10)

    const sendRequest = (event) =>{
        if (foodName !== '') {
            getFoods({
                foodName,
                includeIngreds,
                numberOfResults
            })            
        }
        event.preventDefault()
    }

    return (
        <Form onSubmit={sendRequest}>
        <Title>Search</Title>
            <BaseInput 
                labelText="Food name"
                value={foodName}
                eventOnChange={event => setFoodName(event.target.value)}
            />
            <BaseInput 
                labelText="Include ingredient(s)"
                value={includeIngreds}
                eventOnChange={event => setIncludeIngreds(event.target.value)}
            />
            <BaseInput 
                labelText="Number of results"
                value={numberOfResults}
                eventOnChange={event => setNumberOfResults(event.target.value)}
                inputType='number'
            />
            <Button buttonText="Search Foods" />
        </Form>
    )
}

const mapDispatchToProps = dispatch =>{
    return {
        getFoods: (payload) => dispatch(getFoodsBySearchParameters(payload))
    }
}

export default connect(null, mapDispatchToProps)(SearchSection)
