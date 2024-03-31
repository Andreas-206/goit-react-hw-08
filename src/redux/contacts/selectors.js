import { createSelector } from '@reduxjs/toolkit'
import { Register } from '../register'
import { selectNameFilter } from '../filters/slice'
import { selectContacts } from './slice'

export const selectFilteredContacts = createSelector(
	[selectContacts, selectNameFilter],
	(contacts, name) => {
		if (!name.trim()) return contacts

		return contacts.filter(contact =>
			Register(contact.name).includes(Register(name))
		)
	}
)
