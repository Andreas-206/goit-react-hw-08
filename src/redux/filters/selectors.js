import { createSelector } from '@reduxjs/toolkit'

export const selectors = createSelector({
	selectors: {
		selectNameFilter: state => state.name,
	},
	reducers: {
		changeFilter(state, action) {
			state.name = action.payload
		},
	},
})
