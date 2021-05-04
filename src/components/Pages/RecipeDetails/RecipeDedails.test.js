import React from 'react'
import  configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import { shallow } from 'enzyme'
import RecipeDetails from './RecipeDetails'

describe('<RecipeDetails />', () => {
    const mockStore = configureStore()
    let store, componentContainer
    const initialState = {
        singleFood: {
            image: 'https://webknox.com/recipeImages/1518975-556x370.jpg'
        }
    }

    beforeEach(() =>{
        store = mockStore(initialState)
        componentContainer = shallow(<Provider store={store} ><RecipeDetails /></Provider>)
    })

    it('renders the component', () => {
        expect(componentContainer.length).toEqual(1)
    })

    it('renders the child components', () => {
        // expect(wrapper.find(''))
        // console.log(componentContainer.props().value.store.getState())
        console.log(componentContainer.find(RecipeDetails).debug())
    })
})
