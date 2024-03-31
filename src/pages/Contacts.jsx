import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageTitle from '../components/PageTitle/PageTitle'
import ContactForm from '../components/ContactForm/ContactForm'
import ContactList from '../components/ContactList/ContactList'
import SearchBox from '../components/SearchBox/SearchBox'
import { selectFilteredContacts } from '../redux/selectors'
import { fetchContacts } from '../redux/contacts/contactsOps'
import { selectLoading } from '../redux/selectors'

const Contacts = () => {
	const dispatch = useDispatch()
	const isLoading = useSelector(selectLoading)

	useEffect(() => {
		dispatch(fetchContacts())
	}, [dispatch])

	const contacts = useSelector(selectFilteredContacts)

	return (
		<div className='wrap'>
			<PageTitle>Your Contacts</PageTitle>
			<ContactForm />
			{isLoading && 'Request in progress...'}
			{contacts.length === 0 ? <p>Add your first contact</p> : <SearchBox />}
			<ContactList />
		</div>
	)
}

export default Contacts
