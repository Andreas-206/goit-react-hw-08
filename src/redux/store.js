import { configureStore } from '@reduxjs/toolkit'
import contactsSlice from './contacts/contactsSlice'
import filtersSlice from './filtersSlice'
import authReducer from './auth/slice'

const store = configureStore({
	reducer: {
		auth: authReducer,
		contacts: contactsSlice,
		filters: filtersSlice,
	},
})

export default store
