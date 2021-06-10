import React, { HTMLAttributes } from 'react'
import { useAppSelector } from '../../../../../app/hooks'
import { Summary as StyledSummary } from './SummaryStyle'

const Summary: React.FC<SummaryType> = ({ summary = '' }) => {
   const isLightTheme = useAppSelector((state) => state.themeReducer.isLightTheme)
   return <StyledSummary lightTheme={isLightTheme} dangerouslySetInnerHTML={{ __html: summary }}></StyledSummary>
}

type SummaryType = {
   summary?: string
}

export default Summary
