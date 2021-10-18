import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

import { EditContact } from '../types/types'

export interface uiState {
  editedContact: EditContact
}

const initialState: uiState = {
  editedContact: {
    name: '',
    kana: '',
    email: '',
    message: '',
  },
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setEditedContact: (state, action: PayloadAction<EditContact>) => {
      state.editedContact = action.payload
    },
    resetEditedContact: (state) => {
      state.editedContact = initialState.editedContact
    },
  },
})

export const { setEditedContact, resetEditedContact } = uiSlice.actions

export const selectContact = (state: RootState) => state.ui.editedContact

export default uiSlice.reducer
