import React from 'react'
import 'regenerator-runtime'
import userEvent from '@testing-library/user-event'
// .toBeInTheDocument()
import '@testing-library/jest-dom'
import { render, screen, waitForElementToBeRemoved} from '../../../test-utils'
import SearchVideos from './SearchVideos'

import axios from 'axios'
jest.mock('axios')
const mockVideoData = [
    {
        shortTitle: "8 One-Pot Pastas",
        thumbnail: "https://i.ytimg.com/vi/YTZGPCCB2FU/mqdefault.jpg",
        views: 550467,
        youTubeId: "YTZGPCCB2FU"
    },
    {
        shortTitle: "Macaroni salad",
        thumbnail: "https://i.ytimg.com/vi/81bn4p8H3Kg/mqdefault.jpg",
        views: 307,
        youTubeId: "81bn4p8H3Kg"
    }
]

// https://robertcooper.me/post/testing-redux-apps

describe('test <SearchVideos />', () => {
    beforeEach(() => {
        render(<SearchVideos />)
        expect(await  waitForElementToBeRemoved(() => screen.getByText(/Loading.../)))
    })
    it('should have a default text initially and 2 input fields and a button', async () => {              
        expect(await screen.findByRole('heading', { name: /No videos found yet/i })).toBeInTheDocument()
        expect(await screen.findByRole('combobox', { name: /Video name:/i })).toBeInTheDocument()
        expect(await screen.findByRole('spinbutton', { name: /Results per page/i })).toBeInTheDocument()
        expect(await screen.findByRole('button', { name: /Search Videos/i })).toBeInTheDocument()
    })

    it('should display the videos', async () => {
        const inputText = 'test pasta video'
        const videoNameInputField = await screen.findByRole('combobox', { name: /Video name:/i })
        const button = await screen.findByRole('button', { name: /Search Videos/i })
        const defaultHeading = await screen.findByRole('heading', { name: /No videos found yet/i })

        // There's nothing in the page initially
        expect(defaultHeading).toBeInTheDocument()

        // if nothing typed into the video name input, the request not send
        userEvent.click(button)
        expect(defaultHeading).toBeInTheDocument()
        
        // User types something int the text field
        userEvent.type(videoNameInputField, inputText)
        
        // axios mock call
        axios.get.mockResolvedValue({ data: { videos: mockVideoData }})
        // user clicks the button (request send)
        userEvent.click(button)

        // Loading while the data returns
        expect(await screen.findByText(/Loading.../i))
        
        // wait untill shortTitles are found on the screen
        await screen.findByText(mockVideoData[0].shortTitle)
        await screen.findByText(mockVideoData[1].shortTitle)

        expect(videoNameInputField).not.toHaveValue(inputText)
    })
})

