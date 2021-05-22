import React from 'react'
import { lazy } from 'react'
import { useSelector } from 'react-redux'

import { CardContainer as ContainerStyle } from './ContainerStyle'

const Card = lazy(() => import('./Card/Card'))

const CardContainer = () => {
    const videos = useSelector(state => state.videoReducer.videos)
    return (
        <ContainerStyle>
            {
                videos.length > 0 ?
                videos.map(video => (
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
                )) : <h1>No videos found yet.</h1>
            }
        </ContainerStyle>
    )
}

export default CardContainer
