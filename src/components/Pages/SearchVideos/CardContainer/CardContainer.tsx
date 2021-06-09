import React from 'react'
import { lazy } from 'react'
import { useAppSelector } from '../../../../app/hooks'

import { CardContainer as ContainerStyle } from './ContainerStyle'

const Card = lazy(() => import('./Card/Card'))

const CardContainer: React.FC = () => {
   const videos = useAppSelector((state) => state.videoReducer.videos)
   return (
      <ContainerStyle>
         {videos.length > 0 ? (
            //  Megoldani
            videos.map((video) => (
               <a
                  key={video.youTubeId}
                  target='_blank'
                  rel='noreferrer'
                  href={`https://www.youtube.com/watch?v=${video.youTubeId}`}>
                  <Card title={video.shortTitle} thumbnail={video.thumbnail} />
               </a>
            ))
         ) : (
            <h1>No videos found yet.</h1>
         )}
      </ContainerStyle>
   )
}
export default CardContainer
