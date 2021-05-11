import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import 'regenerator-runtime'
import moxios from 'moxios'

import { GET_VIDEOS } from '../ActionTypes'
import { getVideosBySearchParameters } from '../Video'

const mockStore = configureStore([thunk])
const store = mockStore({})

describe('Test Videos action creators', () => {
    beforeEach(() => moxios.install())
    afterEach(() => moxios.uninstall())

    it('should get the videos from the given url', async () => {
        const responseData = {
            videoName : 'Pasta recipe',
            id: 23123321,
            length: 334
        }
        const expectedAction = [{
            type: GET_VIDEOS,
            payload: responseData
        }]

        moxios.wait(() => {
            const response = moxios.requests.mostRecent()
            response.respondWith({
                status: 200,
                response: { videos: responseData }
            })
        })

        await store.dispatch(getVideosBySearchParameters({ videoName: 'pasta', numberPerPage: 1 })).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        })
    })
})