import React from 'react'
import { useState, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVideosBySearchParameters } from '../../../../store/Slices/VideoSlice'

import { Form, Title } from './StyledSearch'

const BaseInput = lazy(() => import(/* webpackChunkName: "BaseInput" */ '../../../BaseComponents/BaseInputs/BaseInput'))
const Button = lazy(() => import(/* webpackChunkName: "Button" */ '../../../BaseComponents/BaseButton/BaseButton'))

const SearchForm = () => {
    const dispatch = useDispatch()
    const isLightTheme = useSelector(state => state.themeReducer.isLightTheme)

    const [videoName, setVideoName] = useState('')
    const [numberPerPage, setNumberPerPage] = useState(10)

    const sendRequest = event => {
        event.preventDefault()
        if (videoName !== "") {
            dispatch(getVideosBySearchParameters({
                videoName,
                numberPerPage
            }))
            setVideoName('')
        }
    }

    return (
        <Form lightTheme={isLightTheme} onSubmit={sendRequest}>
            <Title role="heading">Search Recipe Videos</Title>
            <BaseInput 
                labelText="Video name:"
                value={videoName}
                eventOnChange={event => setVideoName(event.target.value)}
            />
            <BaseInput 
                labelText="Results per page"
                value={numberPerPage}
                inputType="number"
                eventOnChange={event => setNumberPerPage(event.target.value)}
            />
            <Button>Search Videos</Button>
        </Form>
    )
}

export default SearchForm