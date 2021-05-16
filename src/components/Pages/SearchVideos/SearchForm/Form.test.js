import React from 'react'
import 'regenerator-runtime'
import userEvent from '@testing-library/user-event'
// .toBeInTheDocument()
import '@testing-library/jest-dom'
import { render, screen, create} from '../../../../test-utils'
import SearchForm from './SearchForm'
import { getVideosBySearchParameters } from '../../../../store/Actions/Video'

// https://github.com/enzymejs/enzyme/issues/1917
// Megoldani, hogy lazy load-dal is működjön.

describe('<SearchForm />', () => {
    let dispatch = jest.fn()
    beforeEach(() => {
        render(
            <React.Suspense fallback={<h1>Loading..</h1>}>
                <SearchForm />
            </React.Suspense>
        )       
    })
    it('have a title with text: "Search Videos"', () => {              
        screen.getByText(/Search Recipe Videos/i)
    })
    it('renders the first input field', async () => {
        expect(await screen.findByRole('label', { name: /Video name/i })).toBeInTheDocument()
    })
    it('renders the second input field', async () => {
        expect(await screen.findByRole('label', { name: /Results per page/i })).toBeInTheDocument()
    })
    it('renders the Button component', async () => {
        expect(await screen.findByRole('button', { name: /Search Videos/i })).toBeInTheDocument()     
    })
    it('dispatches the right action', async () => {
        // console.log(create())
        const videoNameInput = await screen.findByRole('label', { name: /Video name/i })
        userEvent.type(
            videoNameInput,
            'Test video name'
        )
        // screen.debug()
        // expect(videoNameInput).toHaveValue('Test video name')
        
        // userEvent.click(await screen.findByRole('button', { name: /Search Videos/i }))

        // const { invoke } = create()
        // invoke(getVideosBySearchParameters('Test video name' ))


        // https://robertcooper.me/post/testing-redux-apps

    })
})

