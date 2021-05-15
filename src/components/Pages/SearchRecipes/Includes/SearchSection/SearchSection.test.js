import React from 'react'
import { render, screen } from '../../../../../test-utils'
import 'regenerator-runtime'
import '@testing-library/jest-dom'

import SearchSection from './SearchSection'

describe('<SearchSection />', () => {
    beforeEach(() => {
        render(
            <React.Suspense fallback={<h1>Loading.....</h1>}>
                <SearchSection />
            </React.Suspense>
        )
    })
    it('should render a title with "Search" text', () => {
        screen.getByText('Search')
    })
    it('renders the button element asynchronously', async () => {
        expect(await screen.findByRole('button', { name: /Search Foods/i })).toBeInTheDocument()
    })
    it('renders the first input field asynchronously (Food name)', async () => {
        expect(await screen.findByRole('label', { name: 'Food name' })).toBeInTheDocument()
    })
    it('renders the second input field asynchronously (Include ingredient)', async () => {
        expect(await screen.findByRole('label', { name: /Include ingredient/i })).toBeInTheDocument()
    })
    it('renders the third input field asynchronously (Number of results)', async () => {
        expect(await screen.findByRole('label', { name: /Number of results/i })).toBeInTheDocument()
    })
})
