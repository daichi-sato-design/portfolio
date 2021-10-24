import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

import { EditContact } from '../types/types'

export interface uiState {
  editedContact: EditContact
}

const initialState: uiState = {
  editedContact: {
    name: '',
    email: '',
    subject: '',
    honeypot: '',
    message: '',
    replyTo: '',
    accessKey: '',
  },
}

// createSlice Sliceを作成
export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // setEditedContact(設定用のAction) 引数で EditContact を受け取る
    setEditedContact: (state, action: PayloadAction<EditContact>) => {
      state.editedContact = action.payload
    },
    // resetEditedContact(リセット用のAction)
    resetEditedContact: (state) => {
      state.editedContact = initialState.editedContact
    },
  },
})

// ReducerActionをComponentから呼び出せるようにexportする
export const { setEditedContact, resetEditedContact } = uiSlice.actions

// ComponentからReduxの中のStateを取得するための関数を作成
// selectContact uiSliceの中にあるeditedContactのStateにアクセスし、データを返す関数
export const selectContact = (state: RootState) => state.ui.editedContact
// selectNews uiSliceの中にあるeditedNewsのStateにアクセスし、データを返す関数
export const selectNews = (state: RootState) => state.ui.editedNews

export default uiSlice.reducer
