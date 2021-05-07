import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Button from './BaseButton'

describe('<Button />', ()=>{
    
    it("renders the button with the text (children)", () => {
        const {getByText} = render(<Button>Gomb</Button>)
        expect(getByText('Gomb'))
    })

    it('onClick event is working', () => {
        const onClick = jest.fn()
        const { getByRole } = render(<Button openClickEvent={onClick}>Test Button</Button>)
        fireEvent.click(getByRole('button'))
        expect(onClick).toHaveBeenCalledTimes(1)
    })
})