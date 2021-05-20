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
    it('should display the menu cards', async () => {
        screen.debug()
    })
    
})