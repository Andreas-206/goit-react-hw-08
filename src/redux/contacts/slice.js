import { createSlice } from '@reduxjs/toolkit'
import { addContact, deleteContact, fetchContact } from './operations'

const initialState = {
	items: [],
	loading: false,
	error: null,
}

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	selectors: {
		selectContacts: state => state.items,
	},
	extraReducers: builder => {
		builder
			.addCase(fetchContact.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchContact.fulfilled, (state, action) => {
				state.loading = false
				state.items = action.payload
			})
			.addCase(fetchContact.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
			.addCase(deleteContact.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.loading = false
				state.items = state.items.filter(el => el.id !== action.payload.id)
			})
			.addCase(deleteContact.rejected, (state, action) => {
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
	},
})

export const { selectContacts } = contactsSlice.selectors

export default contactsSlice.reducer
