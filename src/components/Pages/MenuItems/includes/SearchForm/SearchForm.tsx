import React, { useState } from 'react'
import { Form, Title } from '../../../SearchVideos/SearchForm/StyledSearch'
import { fetchMenuItems } from '../../../../../store/Slices/MenuItemSlice'
import { toggleIsErrorAndSetTest } from '../../../../../store/Slices/ErrorTextSlice'
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks'

const BaseInput = React.lazy(() => import('../../../../BaseComponents/BaseInputs/BaseInput'))
const BaseButton = React.lazy(() => import('../../../../BaseComponents/BaseButton/BaseButton'))

const SearchForm: React.FC = () => {
   const dispatch = useAppDispatch()
   const isLightTheme = useAppSelector((state) => state.themeReducer.isLightTheme)
   const [menuItem, setMenuItem] = useState('')
   const [numberPerPage, setNumberPerPage] = useState('10')

   const submitForm = (event: React.FormEvent) => {
      event.preventDefault()

      if (menuItem !== '') dispatch(fetchMenuItems({ menuItemName: menuItem, numberPerPage }))
      else dispatch(toggleIsErrorAndSetTest('Search fileld is empty!'))

      setNumberPerPage('10')
      setMenuItem('')
   }

   return (
      <Form onSubmit={submitForm} lightTheme={isLightTheme}>
         <Title>Search Menu Items</Title>
         <BaseInput labelText='Menu Item' eventOnChange={(event) => setMenuItem(event.target.value)} value={menuItem} />
         <BaseInput
            labelText='Number/page'
            eventOnChange={(event) => setNumberPerPage(event.target.value)}
            value={numberPerPage}
            inputType='number'
         />
         <BaseButton>Find Menu Items</BaseButton>
      </Form>
   )
}

export default SearchForm
