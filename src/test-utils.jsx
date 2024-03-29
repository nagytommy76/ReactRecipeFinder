// https://redux.js.org/recipes/writing-tests#connected-components
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore, applyMiddleware } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import thunk from 'redux-thunk'
// Import your own reducer
import { rootReducer } from './store/store'
import { darkTheme } from './Theme/Themes'

function render(
    ui,
    {
        initialState,
        store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return (
            <Provider store={store}>
                <ThemeProvider theme={darkTheme}>
                <BrowserRouter>
                    <React.Suspense fallback={<h1>Loading...</h1>}>
                        {children}
                    </React.Suspense>
                </BrowserRouter>
                </ThemeProvider>
            </Provider>
        )
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
