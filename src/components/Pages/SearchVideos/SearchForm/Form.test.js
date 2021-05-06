import React from 'react'
import  configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import 'regenerator-runtime'

import { shallow, mount } from 'enzyme'
import SearchForm from './SearchForm'

// https://github.com/enzymejs/enzyme/issues/1917
// Megoldani, hogy lazy load-dal is működjön.

describe('<SearchForm />', () => {
    const mockStore = configureStore()
    let store, searchFormContainer
    const initialState = {
        themeReducer: {
            isLightTheme: true
        }
    }
    beforeEach(() => {
        store = mockStore(initialState)
        searchFormContainer = mount(
            <Provider store={store}>
                <React.Suspense fallback={null}>
                    <SearchForm />
                </React.Suspense> 
            </Provider>       
        )  
        
    })
    
    it('renders the component correctly', async () => {               
        expect(searchFormContainer.length).toEqual(1)
    })
    it('renders the 2 input field', () => {
        expect(searchFormContainer.find('BaseInput')).toHaveLength(2)
        // console.log(searchFormContainer.debug())
    })
    it('renders the Button component', () => {
        expect(searchFormContainer.find('BaseButton')).toHaveLength(1)
        // console.log(searchFormContainer.state())
        // searchFormContainer.find('BaseInput').at(0).simulate('change', { target: { value: 'Semmi sem biztos' } });
        
    })
})

