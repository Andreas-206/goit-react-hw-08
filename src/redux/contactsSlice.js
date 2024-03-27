import { createSlice } from '@reduxjs/toolkit'
import {
	fetchContacts,
	addContact,
	deleteContact,
	changeContact,
} from './contactsOps'

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: {
		items: [],
		loading: false,
		error: null,
	},
	extraReducers: builder => {
		builder
			.addCase(fetchContacts.pending, state => {
				state.loading = true
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.loading = false
				state.error = null
				state.items = action.payload
			})
			.addCase(fetchContacts.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
			.addCase(addContact.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.loading = false
				state.items.push(action.payload)
			})
			.addCase(addContact.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
			.addCase(deleteContact.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.loading = false
				state.items = state.items.filter(
					contact => contact.id !== action.payload.id
				)
			})
			.addCase(deleteContact.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
			.addCase(changeContact.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(changeContact.fulfilled, (state, action) => {
				state.loading = false
				state.items = action.payload
			})
			.addCase(changeContact.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
	},
})

export default contactsSlice.reducer
