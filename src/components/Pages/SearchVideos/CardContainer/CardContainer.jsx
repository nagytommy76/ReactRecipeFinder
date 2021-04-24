import { lazy } from 'react'
import { connect } from 'react-redux'

import { CardContainer as ContainerStyle } from './ContainerStyle'

const Card = lazy(() => import('./Card/Card'))

const CardContainer = ({ videos }) => {
    return (
        <ContainerStyle>
            {videos.map(video => (
                <a key={video.youTubeId} 
                    target="_blank" 
                    rel="noreferrer" 
                    href={`https://www.youtube.com/watch?v=${video.youTubeId}`}
                >
                    <Card                            
                        title={video.shortTitle}
                        thumbnail={video.thumbnail}
                    />
                </a>
            ))}
        </ContainerStyle>
    )
}

const mapStateToProps = state => {
    return {
        videos: state.videoReducer.videos
    }
}

export default connect(mapStateToProps)(CardContainer)
