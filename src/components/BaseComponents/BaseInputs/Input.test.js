import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import 'regenerator-runtime'
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'

import Input from './BaseInput'

test('should render the Input correctly', async () => {
    const onChange = jest.fn( )
    const enteredText = 'Entered testing text.....'
    render(<Input 
        labelText="Test text"
        eventOnChange={onChange}
        value=""
    />)

    expect(screen.getByTestId('input')).toBeInTheDocument()
    
    await userEvent.type(screen.getByTestId('input'), enteredText)
    // 25 mert 25 karakterleütés a szöveg!!!
    expect(onChange).toHaveBeenCalledTimes(enteredText.length)

    // screen.debug()
})


afterEach(cleanup)