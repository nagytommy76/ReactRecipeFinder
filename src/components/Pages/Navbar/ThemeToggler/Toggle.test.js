import React from 'react'
import { render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import  configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import Toggle from './Toggle'

describe('Testing the theme <Toggle /> component in the navbar', () => {
    const mockStore = configureStore()
    let store, toggleComponent
    const initialState = {
        themeReducer: {
            isLightTheme: true
        }
    }
    beforeEach(() => {
        store = mockStore(initialState)
        const { getByTestId } = render(
            <Provider store={store}>
                <Toggle />
            </Provider>
        )
        toggleComponent = getByTestId('toggler')
    })
    it('renders correctly, without errors', () => {
        toggleComponent
    })

    afterEach(cleanup)
})