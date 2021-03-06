import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks'
import { getFoodsBySearchParameters } from '../../../../../store/Slices/FoodSlice'

import { Form, Title } from './StyledSearch'

const Button = React.lazy(() => import(/* webpackChunkName: "BaseButton" */ '../../../../BaseComponents/BaseButton/BaseButton'))
const BaseInput = React.lazy(() => import(/* webpackChunkName: "BaseInput" */ '../../../../BaseComponents/BaseInputs/BaseInput'))

const SearchSection: React.FC = () => {
   const dispatch = useAppDispatch()
   const isLightTheme = useAppSelector((state) => state.themeReducer.isLightTheme)

   const [foodName, setFoodName] = useState('')
   const [includeIngreds, setIncludeIngreds] = useState('')
   const [numberOfResults, setNumberOfResults] = useState('15')

   const sendRequest = (event: React.FormEvent) => {
      event.preventDefault()
      if (foodName !== '') {
         dispatch(
            getFoodsBySearchParameters({
               foodName,
               includeIngreds,
               numberOfResults
            })
         )
      }
      setIncludeIngreds('')
      setFoodName('')
   }

   return (
      <Form lightTheme={isLightTheme} onSubmit={sendRequest}>
         <Title>Search Recipes</Title>
         <BaseInput labelText='Food name' value={foodName} eventOnChange={(event) => setFoodName(event.target.value)} />
         <BaseInput
            labelText='Include ingredient(s)'
            value={includeIngreds}
            eventOnChange={(event) => setIncludeIngreds(event.target.value)}
         />
         <BaseInput
            labelText='Number of results'
            value={numberOfResults}
            eventOnChange={(event) => setNumberOfResults(event.target.value)}
            inputType='number'
         />
         <Button>Search Foods</Button>
      </Form>
   )
}

export default SearchSection
