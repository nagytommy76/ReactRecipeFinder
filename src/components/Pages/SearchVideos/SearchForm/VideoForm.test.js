import React from 'react'
import {connect} from 'react-redux'

import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';

import VideoForm from './SearchForm'

// jest.mock('../../../BaseComponents/BaseInputs/BaseInput', () => () => <div data-testid="input" />)
// jest.mock('../../../BaseComponents/BaseButton/BaseButton', () => () => <div data-testid="button" />)

test('Display the <VideoForm /> component', () => {
    const onChange = jest.fn();
    
    const { getByTestId } = render(connect(<VideoForm />))
    screen.debug()
    // expect(getByTestId('video')).toBeInTheDocument()
})
