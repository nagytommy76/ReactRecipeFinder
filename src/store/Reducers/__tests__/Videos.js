import { GET_VIDEOS } from '../../Actions/ActionTypes'
import videoReducer, { initialState } from '../Videos'

describe('Testing videos reducer', () => {
    const videos = [
        { id: 212112, videoName: 'test1' },
        { id: 998855, videoName: 'test2' }
    ]

    it('should return the initial state',() => {
        expect(videoReducer(undefined, {})).toEqual(initialState)
    })
    it('should handle GET_VIDEOS', () => {
        expect(videoReducer(initialState, { type: GET_VIDEOS, payload: videos })).toEqual({
            ...initialState,
            videos: videos
        })
    })
})
