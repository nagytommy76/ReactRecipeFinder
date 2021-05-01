import React from 'react'
import { render } from '@testing-library/react'
import Input from './BaseInput'

test('', () => {
    const input = render(<Input 
        labelText="Test Label"
        eventOnChange={() => {}}
    />)

    expect(input.getByRole('label').textContent).toBe('Test Label')
})