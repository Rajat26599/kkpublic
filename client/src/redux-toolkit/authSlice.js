import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: '',
  username: '',
  email: '',
  mobile: '',
  roles: [],
  loggedin: false,
}

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.mode = action.payload.data.mode
      state.username = action.payload.data.username
      state.email = action.payload.data.email
      state.mobile = action.payload.data.mobile
      state.roles = action.payload.data.roles
      state.loggedin = action.payload.data.loggedin
    },
    logout: () => initialState,
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer