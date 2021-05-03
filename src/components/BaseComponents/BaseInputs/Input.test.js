import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import 'regenerator-runtime'
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'

import Input from './BaseInput'
describe('<BaseInput> testing', () => {
    test('should render the Input correctly', () => {
        const onChange = jest.fn()
        render(<Input 
            labelText="Test text"
            eventOnChange={onChange}
        />)    
        expect(screen.getByTestId('input')).toBeInTheDocument()    
    })

    test('Testing user entered something', () => {
        const onChange = jest.fn()
        const enteredText = 'Entered testing text.....'
        render(<Input 
            labelText="Test text1"
            eventOnChange={onChange}
        />)
        
        userEvent.type(screen.getByTestId('input'), enteredText)
        // 25 mert 25 karakterleütés a szöveg!!!
        expect(onChange).toHaveBeenCalledTimes(enteredText.length)
        
        expect(screen.getByTestId('input')).toHaveValue(enteredText)
    })
    test('Label text and id is correct', () => {
        const onChange = jest.fn()
        const enteredLabel = 'Test label'
        render(<Input 
            labelText={enteredLabel}
            eventOnChange={onChange}
        />)   
        expect(screen.getByTestId('input').id).toBe(enteredLabel)
        expect(screen.queryByLabelText(enteredLabel))
    })
    
})

afterEach(cleanup)