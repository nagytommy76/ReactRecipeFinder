import { createSlice } from '@reduxjs/toolkit'

const initialState: { isModalOpen: boolean } = {
   isModalOpen: false
}

const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      showModal: (state) => {
         state.isModalOpen = true
      },
      hideModal: (state) => {
         state.isModalOpen = false
      }
   }
})

export const { showModal, hideModal } = modalSlice.actions

export default modalSlice.reducer
