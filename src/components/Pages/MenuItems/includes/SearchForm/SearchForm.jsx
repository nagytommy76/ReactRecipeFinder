import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Form, Title } from '../../../SearchVideos/SearchForm/StyledSearch'

const BaseInput = React.lazy(() => import('../../../../BaseComponents/BaseInputs/BaseInput'))
const BaseButton = React.lazy(() => import('../../../../BaseComponents/BaseButton/BaseButton'))

const SearchForm = () => {
    const isLightTheme = useSelector(state => state.themeReducer.isLightTheme)
    const [menuItem, setMenuItem] = useState('')
    const [numberPerPage, setNumberPerPage] = useState(10)

    const changeMenuItemName = event => {
        setMenuItem(event.target.value)
    }
    const changeNumberPerPage = event => {
        setNumberPerPage(event.target.value)
    }

    const submitForm = event => {
        event.preventDefault()
    }

    return (
        <Form onSubmit={submitForm} lightTheme={isLightTheme}>
            <Title>Search Menu Items</Title>
            <BaseInput 
                labelText="Menu Item"
                eventOnChange={changeMenuItemName}
                value={menuItem}
            />
            <BaseInput 
                labelText="Number/page"
                eventOnChange={changeNumberPerPage}
                value={numberPerPage}
                inputType="number"
            />
            <BaseButton>Find Menu Items</BaseButton>
        </Form>
    )
}

export default SearchForm
