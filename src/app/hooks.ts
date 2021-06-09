import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

import type { RootState, AppDispatch } from '../store/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
// Így nem szükséges minden component-nél useSelector((state: RootState) => state.valami)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
