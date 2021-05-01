import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Button from './BaseButton'


test("Testing the base button's text", () => {
    const button = render(<Button>Gomb</Button>)
    
    expect(button.getByRole('button').textContent).toBe('Gomb')
})
