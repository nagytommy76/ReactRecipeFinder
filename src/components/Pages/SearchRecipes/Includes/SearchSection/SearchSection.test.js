import React from 'react'
import { render, screen, waitFor } from '../../../../../test-utils'
import 'regenerator-runtime'
import '@testing-library/jest-dom'

import SearchSection from './SearchSection'

describe('<SearchSection />', () => {
    it('renders the button element asynchronously', async () => {
        render(
            <React.Suspense fallback={<h1>Loading.....</h1>}>
                <SearchSection />
            </React.Suspense>
        )
        const button = await screen.findByRole('button', { name: /Search Foods/i })
        expect(button).toBeInTheDocument()
    })
    it('renders the input fields asynchronously', async () => {
        render(
            <React.Suspense fallback={<h1>Loading.....</h1>}>
                <SearchSection />
            </React.Suspense>
        )
        screen.debug()
        await screen.findByRole('label', { name: 'Food name' })
        // const input2 = await screen.findByLabelText(/Include ingredient/i)
        // const input3 = await screen.findByLabelText(/Number of results/i)
        // expect(input1).toBeInTheDocument()
        // expect(input2).toBeInTheDocument()
        // expect(input3).toBeInTheDocument()
    })
})
