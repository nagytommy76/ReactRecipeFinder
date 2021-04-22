import { connect } from 'react-redux'
import { getVideosBySearchParameters } from '../../../store/Actions/Video'

const SearchVideos = ({ getVideos }) => {
    return (
        <div>
            <h1>Search Videos</h1>
            <button onClick={getVideos}>Teszt</button>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        getVideos: () => dispatch(getVideosBySearchParameters({
            videoName: 'pasta',
            numberPerPage: 2
        }))
    }
}

export default connect(null, mapDispatchToProps)(SearchVideos)
