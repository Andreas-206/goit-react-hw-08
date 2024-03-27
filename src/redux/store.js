import { configureStore } from '@reduxjs/toolkit'
import contactsSlice from './contacts/contactsSlice'
import filtersSlice from './filtersSlice'

const store = configureStore({
	reducer: {
		contacts: contactsSlice,
		filters: filtersSlice,
	},
})

export default store
