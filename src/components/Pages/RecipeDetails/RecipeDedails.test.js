import React from 'react'
import { render, screen } from '../../../test-utils'
import 'regenerator-runtime'
import '@testing-library/jest-dom'

import RecipeDetails from './RecipeDetails'

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
                    measures: {
                        metric: {
                            unitLong: "kcla",
                            amount: 343
                        }
                    }
                }]
            }
        ],
        selectedFoodId: 4343
    }
}

describe('<RecipeDetails />', () => {
    beforeEach(() => {
        render(
            <React.Suspense fallback={<h1>Loading...</h1>}>
                <RecipeDetails />
            </React.Suspense>,
            { initialState }
        )
    })
    it('should display the header section with an image', async () => {
        expect(await screen.findByText('test ingredient'))
        screen.debug()
    })
        
})

