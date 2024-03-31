import { createSlice } from '@reduxjs/toolkit'
import { addContact, deleteContacts, fetchContacts } from './operations'

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
			.addCase(fetchContacts.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.loading = false
				state.items = action.payload
			})
			.addCase(fetchContacts.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
			.addCase(deleteContacts.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(deleteContacts.fulfilled, (state, action) => {
				state.loading = false
				state.items = state.items.filter(el => el.id !== action.payload.id)
			})
			.addCase(deleteContacts.rejected, (state, action) => {
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
