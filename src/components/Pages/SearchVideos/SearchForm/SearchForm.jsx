import { useState, lazy } from 'react'
import { connect } from 'react-redux'
import { getVideosBySearchParameters } from '../../../../store/Actions/Video'

import { Form, Title } from './StyledSearch'

const BaseInput = lazy(() => import(/* webpackChunkName: "BaseInput" */ '../../../BaseComponents/BaseInputs/BaseInput'))
const Button = lazy(() => import(/* webpackChunkName: "Button" */ '../../../BaseComponents/BaseButton/BaseButton'))

const SearchForm = ({ getVideos, isLightTheme }) => {
    const [videoName, setVideoName] = useState('')
    const [numberPerPage, setNumberPerPage] = useState(10)

    const sendRequest = event => {
        event.preventDefault()
        getVideos({
            videoName,
            numberPerPage
        })
    }

    return (
        <Form lightTheme={isLightTheme} onSubmit={sendRequest}>
            <Title>Search Videos</Title>
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

const mapStateToProps = state => {
    return {
        isLightTheme: state.themeReducer.isLightTheme
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getVideos: (payload) => dispatch(getVideosBySearchParameters(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)