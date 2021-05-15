import React from 'react'
import { render, fireEvent, screen, cleanup } from '../../../test-utils'
import Card from './BaseCard'

const props = {
    title: 'test1',
    image: '...',
    id: 111,
    caloricBreakdown: {
        name: 'test111',
        amount: 212
    }
}

afterEach(cleanup)

it('renders card component', () => {
    render(
        <Card 
            title={props.title}
            image={props.image}
            id={props.image}
            caloricBreakdown={props.caloricBreakdown}
            customClickEvent={() => {}}
        />
    )
    screen.getByText(props.title)
})

it('renders card component', () => {
    const onClick = jest.fn()
    render(
        <Card 
            title={props.title}
            image={props.image}
            id={props.image}
            caloricBreakdown={props.caloricBreakdown}
            customClickEvent={onClick}
        />
    )
    fireEvent.click(screen.getByRole('article'))
    expect(onClick).toHaveBeenCalledTimes(1)
})

