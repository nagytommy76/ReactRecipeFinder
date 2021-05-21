import React from 'react'
import 'regenerator-runtime'
import { render, screen } from '../../../test-utils'
import { initialState } from '../../../store/Reducers/MenuItems'

import MenuItems from './MenuItems'

describe('<MenuItems>', () => {
    beforeEach(() => {
        render(
            <React.Suspense fallback={<h1>Loading...</h1>}>
                <MenuItems />
            </React.Suspense>
        )
    })
    it('should display the search form with 2 input fields and a button', async () => {
        await screen.findByRole('input', { name: /Menu Item/i })
        await screen.findByRole('input', { name: 'Number/page' })
        await screen.findByRole('button', { name: /Find Menu Items/i })
        screen.debug()
    })
    
})