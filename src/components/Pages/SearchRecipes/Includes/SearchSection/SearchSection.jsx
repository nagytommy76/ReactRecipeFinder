import React, {useState} from 'react'
import { connect } from 'react-redux'
import { getFoodsBySearchParameters } from '../../../../../store/Actions/Food'

import { Form, Title } from './StyledSearch'

const Button = React.lazy(() => import(/* webpackChunkName: "BaseButton" */ '../../../../BaseComponents/BaseButton/BaseButton.jsx'))
const BaseInput = React.lazy(() => import(/* webpackChunkName: "BaseInput" */'../../../../BaseComponents/BaseInputs/BaseInput'))

const SearchSection = ({ getFoods, isLightTheme }) => {
    const [foodName, setFoodName] = useState('')
    const [includeIngreds, setIncludeIngreds] = useState('')
    const [numberOfResults, setNumberOfResults] = useState(15)

    const sendRequest = (event) =>{
        event.preventDefault()
        if (foodName !== '') {
            getFoods({
                foodName,
                includeIngreds,
                numberOfResults
            })            
        }
        setIncludeIngreds('')
        setFoodName('')
    }

    return (
        <Form lightTheme={isLightTheme} onSubmit={sendRequest}>
        <Title>Search Recipes</Title>
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
            <Button>Search Foods</Button>
        </Form>
    )
}

const mapStateToProps = (state) => {
    return {
        isLightTheme: state.themeReducer.isLightTheme
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        getFoods: (payload) => dispatch(getFoodsBySearchParameters(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection)
