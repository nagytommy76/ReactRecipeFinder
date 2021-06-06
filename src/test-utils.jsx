// https://redux.js.org/recipes/writing-tests#connected-components
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore, applyMiddleware } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
// Import your own reducer
import { rootReducer } from './store/store'

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
                <BrowserRouter>
                    <React.Suspense fallback={<h1>Loading...</h1>}>
                        {children}
                    </React.Suspense>
                </BrowserRouter>
            </Provider>
        )
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
