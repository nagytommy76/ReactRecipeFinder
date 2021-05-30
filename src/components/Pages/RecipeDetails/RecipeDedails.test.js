import React from 'react'
import { render, screen } from '../../../test-utils'
import 'regenerator-runtime'
import '@testing-library/jest-dom'

import RecipeDetails from './RecipeDetails'
import userEvent from '@testing-library/user-event'

const initialState = {
    foodReducer: {
        foods: [
            {
                id: 4343,
                summary: "<h1>Test summary HTML</h1>",
                title: "Potato Soup with Sun Dried Tomato and Ham",
                analyzedInstructions: [
                    {steps: [{
                        number: 1,
                        equipment: [{
                            id: 9999,
                            image: "pan.jpg",
                            localizedName: "sauce pan",
                        }],
                        step: "step"
                    }]
                    }
                ],
                image: 'test.jpg',
                extendedIngredients: [{ 
                    name: 'test ingredient',
                    id: 32214,
                    image: 'carrot.jpg',
                    measures: {
                        metric: {
                            unitLong: "kcal",
                            amount: 343
                        }
                    }
                }],
                nutrition: {
                    caloricBreakdown: {
                        percentCarbs: 15,
                        percentFat: 10,
                        percentProtein: 20
                    },
                    nutrients: [{
                        amount: 192.5,
                        name: 'Calories',
                        percentOfDailyNeeds: 9.96,
                        unit: 'kcal'
                    }]
                }
            }
        ],
        selectedFoodId: 4343
    }
}

describe('<RecipeDetails />', () => {
    beforeEach(() => {
        render(<RecipeDetails />, { initialState })
    })
    it('should display the header section with an image', async () => {
        await screen.findByAltText(initialState.foodReducer.foods[0].image)
    })
    it('should display the ingredients', async () => {
        await screen.findByText(initialState.foodReducer.foods[0].extendedIngredients[0].name)
    })
    it('should display the summary section', async () => {
        await screen.findByRole('heading', { name: /Test summary HTML/i })
    })
    it('should display the modal button. After user clicks it shows the modal', async () => {
        const showModalButton = await screen.findByRole('button', { name: /Show food nutrients/i })

        userEvent.click(showModalButton)
        await screen.findByRole('heading', { name: 'Food Nutrients' })
        await screen.findByText(`of daily carbs needs`)
    })
    it('should display the equipments list', async () => {
        await screen.findByText('Equipments')
    })
    it('should display the instructions list', async () => {
        await screen.findByText('Istructions')
        await screen.findByText(initialState.foodReducer.foods[0].analyzedInstructions[0].steps[0].step)
    })
    
})

