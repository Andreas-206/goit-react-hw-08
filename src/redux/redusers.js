import contactsSlice from './contacts/contactsSlice'
import filtersSlice from './filtersSlice'
import authSlice from './auth/slice'

export const rootReducer = {
	contacts: contactsSlice,
	filters: filtersSlice,
	auth: authSlice,
}
