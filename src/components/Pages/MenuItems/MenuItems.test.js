import React from 'react'
import 'regenerator-runtime'
import '@testing-library/jest-dom'
import { render, screen, act } from '../../../test-utils'
// import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'

import MenuItems from './MenuItems'
import axios from 'axios'
jest.mock('axios')


const mockMenuItemData = [
    {
        id: 419357,
        image: "https://images.spoonacular.com/file/wximages/419357-312x231.png",
        imageType: "png",
        readableServingSize: null,
        restaurantChain: "Hooters",
        servingSize: null,
        title: "Burger Sliders"
    },
    {
        id: 424594,
        image: "https://images.spoonacular.com/file/wximages/424594-312x231.png",
        imageType: "png",
        readableServingSize: "Kids",
        restaurantChain: "Burger King",
        servingSize: "Kids",
        title: "Hamburger"
    }
]

const mockMenuItemNutrients = {
    calories: 270,
    carbs: "35g",
    fat: "8g",
    nutrients: [
        {
            name: "Protein",
            amount: 15,
            unit: "g"
        },
        {
            name: "Cholesterol",
            amount: 20,
            unit: "g"
        },
        {
            name: "Sugar",
            amount: 10,
            unit: "g"
        }
    ]
}


describe('<MenuItems>', () => {
    beforeEach(() => {
        render(<MenuItems />)
    })
    it('should display the search form with the first input', async () => {
        await screen.findByRole('input', { name: /Menu Item/i })
    })
    it('should display the second input field with a default value of: 10', async () => {
        await screen.findByRole('input', { name: 'Number/page' })
    })
    it('should display the menu items after the user enters something in the text field', async () => {
        const searchText = "burger"

        const textInputField = await screen.findByRole('input', { name: /Menu Item/i })
        const searchButton = await screen.findByRole('button', { name: "Find Menu Items" })
        const initialHeadingText = await screen.findByRole('heading', { name: /No results yet/i })

        // If the input text is empty the request not send
        userEvent.click(searchButton)
        expect(initialHeadingText).toBeInTheDocument()

        // type something in the text and number field
        userEvent.type(textInputField, searchText)

        // Sesnding request
        axios.get.mockResolvedValue({data: { menuItems: mockMenuItemData }})
        userEvent.click(searchButton)
        await screen.findByText('Loading...')

        // the menu items is on the screen
        const selectedCardText = await screen.findByText(mockMenuItemData[0].title)
        await screen.findByText(mockMenuItemData[1].title)

        // the text input field set to default
        expect(textInputField).not.toHaveValue(searchText)

        // click on the card, and get the nutriens
        // https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
        axios.get.mockResolvedValue({ data: { nutrition: mockMenuItemNutrients } })
        await act(async () => userEvent.click(selectedCardText))

        await screen.findByText(`Calories: ${mockMenuItemNutrients.calories}kcal`)

        screen.debug()
    })    
})