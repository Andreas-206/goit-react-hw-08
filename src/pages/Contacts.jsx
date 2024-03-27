import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageTitle from '../components/PageTitle/PageTitle'
import ContactList from '../components/ContactList/ContactList'
import { fetchContacts } from '../redux/contacts/contactsOps'
import { selectLoading } from '../redux/selectors'

const Contacts = () => {
	const dispatch = useDispatch()
	const isLoading = useSelector(selectLoading)

	useEffect(() => {
		dispatch(fetchContacts())
	}, [dispatch])

	return (
		<>
			<PageTitle>Your Contacts</PageTitle>
			{isLoading && 'Request in progress...'}
			<ContactList />
		</>
	)
}

export default Contacts
