import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Title } from '../../../SearchVideos/SearchForm/StyledSearch'
import { fetchMenuItems } from '../../../../../store/Slices/MenuItemSlice'
import { toggleIsErrorAndSetTest } from '../../../../../store/Slices/ErrorTextSlice'

const BaseInput = React.lazy(() => import('../../../../BaseComponents/BaseInputs/BaseInput'))
const BaseButton = React.lazy(() => import('../../../../BaseComponents/BaseButton/BaseButton'))

const SearchForm = () => {
    const dispatch = useDispatch()
    const isLightTheme = useSelector(state => state.themeReducer.isLightTheme)
    const [menuItem, setMenuItem] = useState('')
    const [numberPerPage, setNumberPerPage] = useState(10)

    const submitForm = event => {
        event.preventDefault()

        if (menuItem !== '') dispatch(fetchMenuItems({ menuItemName: menuItem, numberPerPage }))
        else dispatch(toggleIsErrorAndSetTest('Please enter something in the search filed'))

        setNumberPerPage(10)
        setMenuItem('')
    }

    return (
        <Form onSubmit={submitForm} lightTheme={isLightTheme}>
            <Title>Search Menu Items</Title>
            <BaseInput 
                labelText="Menu Item"
                eventOnChange={event => setMenuItem(event.target.value)}
                value={menuItem}
                displayError={true}
            />
            <BaseInput 
                labelText="Number/page"
                eventOnChange={event => setNumberPerPage(event.target.value)}
                value={numberPerPage}
                inputType="number"
            />
            <BaseButton>Find Menu Items</BaseButton>
        </Form>
    )
}

export default SearchForm
