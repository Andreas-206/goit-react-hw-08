import { createSlice } from '@reduxjs/toolkit'
import { logIn, logOut, register, refreshUser } from './operations'

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: {
			name: null,
			email: null,
		},
		token: null,
		isLoggedIn: false,
		isRefreshing: false,
		error: false,
	},
	extraReducers: builder =>
		builder
			.addCase(register.pending, state => {
				state.isLoggedIn = false
			})
			.addCase(register.fulfilled, (state, action) => {
				state.user = action.payload.user
				state.token = action.payload.token
				state.isLoggedIn = true
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoggedIn = false
				state.error = action.payload
			})
			.addCase(logIn.pending, state => {
				state.isLoggedIn = true
			})
			.addCase(logIn.fulfilled, (state, action) => {
				state.user = action.payload.user
				state.token = action.payload.token
				state.isLoggedIn = true
			})
			.addCase(logIn.rejected, (state, action) => {
				state.isLoggedIn = false
				state.error = action.payload
			})
			.addCase(logOut.pending, state => {
				state.isLoggedIn = false
			})
			.addCase(logOut.fulfilled, state => {
				state.user = {
					name: null,
					email: null,
				}
				state.token = null
				state.isLoggedIn = false
			})
			.addCase(logOut.rejected, (state, action) => {
				state.isLoggedIn = false
				state.error = action.payload
			})
			.addCase(refreshUser.pending, state => {
				state.isRefreshing = true
			})
			.addCase(refreshUser.fulfilled, (state, action) => {
				state.user = action.payload
				state.isLoggedIn = true
				state.isRefreshing = false
			})
			.addCase(refreshUser.rejected, state => {
				state.isLoggedIn = false
				state.isRefreshing = false
				state.error = true
			}),
})

export default authSlice.reducer
