import React from 'react'
import { render, screen } from '../../../test-utils'
import RecipeDetails from './RecipeDetails'

describe('<RecipeDetails />', () => {
    beforeEach(() => {
        render(
            <React.Suspense fallback={<h1>Loading...</h1>}>
                <RecipeDetails />
            </React.Suspense>,
            {foodReducer: test({singleFood: {
                title: "Potato Soup with Sun Dried Tomato and Ham"
            }})}
        )
        // https://robertcooper.me/post/testing-redux-apps
    })
    it('renders the component', () => {
        screen.debug()
    })
})
