import React from 'react'
import { act, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'regenerator-runtime'
import userEvent from '@testing-library/user-event'

import BaseInput from './BaseInput'


describe('Testing <BaseInput />', () => {
    it('should display a text input field, and the user can iteract with it', async () => {
        const onChange = jest.fn()
        const enteredText = "Test entered text"
        render(<BaseInput labelText="test input" eventOnChange={onChange} />)

        const inputField = await screen.findByRole('input', { name: /test input/i })

        await act(async() => userEvent.type(inputField, enteredText))
        expect(onChange).toHaveBeenCalledTimes(enteredText.length)

        expect(inputField).toHaveValue(enteredText)
    })
    it('should display a number input field and the user can iteract with it', async () => {
        const onChange = jest.fn()
        render(<BaseInput labelText="test number input" eventOnChange={onChange} inputType="number" />)

        const numberInput = screen.getByRole('input', { name: /test number input/i })

        await act(async () => userEvent.type(numberInput, '5'))
        expect(onChange).toHaveBeenCalledTimes(1)
        expect(numberInput).toHaveValue(5)
    })
})

