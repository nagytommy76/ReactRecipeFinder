import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import  configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import Navbar from './Navbar'

describe('Testing the <Navbar /> component and the links', () => {
    const mockStore = configureStore()
    let store
    const initialState = {
        themeReducer: {
            isLightTheme: true
        }
    }

    it('renders the navbar correctly', () => {
        store = mockStore(initialState)
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Navbar />
                </Provider>
            </BrowserRouter>
        )
        getByTestId('navbar')
    })
})
