import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import 'regenerator-runtime'

import axios from 'axios'
jest.mock('axios')

import { GET_VIDEOS } from '../ActionTypes'
import { getVideosBySearchParameters } from '../Video'

const mockStore = configureStore([thunk])
const store = mockStore({})

describe('Test Videos action creators', () => {
    it('should get the videos from the given url', async () => {
        const responseData = [
            {
                videoName : 'Fish pasta recipe',
                id: 53232135,
                length: 568
            },
            {
                videoName : 'Pasta recipe',
                id: 23123321,
                length: 425
            }
        ]
        const expectedAction = [{
            type: GET_VIDEOS,
            payload: responseData
        }]

        axios.get.mockResolvedValue({ data: { videos: responseData }})

        await store.dispatch(getVideosBySearchParameters({ videoName: 'pasta', numberPerPage: 1 })).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        })
    })
})