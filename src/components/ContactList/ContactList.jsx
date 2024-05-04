import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux'
import { selectFilteredContacts } from '../../redux/contacts/selectors.js'

const ContactList = () => {
	const contacts = useSelector(selectFilteredContacts)

	return (
		<ul>
			{contacts.map(contact => (
				<Contact key={contact._id} contact={contact} />
			))}
		</ul>
	)
}

export default ContactList
