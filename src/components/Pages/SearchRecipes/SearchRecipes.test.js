import React from 'react'
// import { BrowserRouter as Router} from 'react-router-dom'
import 'regenerator-runtime'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { render, screen } from '../../../test-utils'
import SearchRecipes from './SearchRecipes'

import axios from 'axios'
jest.mock('axios')

const mockRecipeData = [
    {
        id: 545445,
        title: 'Rasta pasta',
        image: 'https://semmi.me/api/pic/semmi312x231',
        nutrition: {
            nutrients: [
                {
                    name: 'Noting',
                    amount: 122,
                    unit: 'kcal'
                }
            ]
        }
    },
    {
        id: 114147,
        title: 'Chicken pasta',
        image: 'https://semmi.me/api/pic/jjhhgj312x231',
        nutrition: {
            nutrients: [
                {
                    name: 'Test2',
                    amount: 155,
                    unit: 'kcal'
                }
            ]
        }
    }
]
describe('<SearhRecipes />', () => {
    beforeEach(() => {
        render(<SearchRecipes />)
    })
    it('should display the Search form with 3 input fields and 1 button', async () => {
        expect(await screen.findByRole('button', { name: /Search Foods/i })).toBeInTheDocument()
        expect(await screen.findByRole('input', { name: "Include ingredient(s)" })).toBeInTheDocument()
        expect(await screen.findByRole('input', { name: /Number of results/i })).toBeInTheDocument()
        expect(await screen.findByRole('input', { name: /Food name/i })).toBeInTheDocument()
    })
    it('should display the recipes after the user enters something in the input field and clicks the button', async () => {
        const searchText = 'Test pasta recipe'
        const includeIng = 'test include ingredients'

        const foodNameInput = await screen.findByRole('input', { name: /Food name/i })
        const ingredInput = await screen.findByRole('input', { name: /Include ingredient/i })
        const numberOfResultsInput = await screen.findByRole('input', { name: /Number of results/i })
        const button = await screen.findByRole('button', { name: /Search Foods/i })
        const initialTextHeader = await screen.findByRole('heading', { name: /Nothing To show/i })
        // initially nothing in the screen, only this text
        expect(initialTextHeader).toBeInTheDocument()

        // if nothing typed into the video name input, the request not send
        userEvent.click(button)
        expect(initialTextHeader).toBeInTheDocument()

        // The user enters something into the fields
        userEvent.type(foodNameInput, searchText)
        userEvent.type(ingredInput, includeIng)

        // the default number/page is 15
        expect(numberOfResultsInput).toHaveValue(15)
        // The user rewrites the number field's default (15) value to 2
        userEvent.clear(numberOfResultsInput)
        userEvent.type(numberOfResultsInput, '2')
        expect(numberOfResultsInput).toHaveValue(2)

        axios.get.mockResolvedValue({ data: { results: mockRecipeData }})
        userEvent.click(button)
        expect(await screen.findByText(/Loading.../i))

        // The recipes on the screen
        await screen.findByText(mockRecipeData[0].title)
        await screen.findByText(mockRecipeData[1].title)

        // reset input fields
        expect(foodNameInput).not.toHaveValue(searchText)
        expect(ingredInput).not.toHaveValue(includeIng)
    })
})

