import { Suspense, lazy, useEffect } from 'react'
// import ContactForm from './components/ContactForm/ContactForm'
// import SearchBox from './components/SearchBox/SearchBox'
// import ContactList from './components/ContactList/ContactList'
// import { useSelector, useDispatch } from 'react-redux'
// import { selectContacts } from './redux/selectors'
// import { fetchContacts } from './redux/contactsOps'
import Layout from './components/Layout/Layout'
import { Routes, Route } from 'react-router-dom'
import './App.css'

const HomePage = lazy(() => import('./pages/Home.jsx'))
const LoginPage = lazy(() => import('./pages/LogIn.jsx'))
const RegisterPage = lazy(() => import('./pages/Register.jsx'))
const ContactsPage = lazy(() => import('./pages/Contacts.jsx'))

const App = () => 

	return (
		<Layout>
			<Suspense fallback={null}>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/contacts' element={<ContactsPage />} />
				</Routes>
			</Suspense>
		</Layout>
	)
}

export default App

	// const dispatch = useDispatch()
	// const contacts = useSelector(selectContacts)

	// useEffect(() => {
	// 	dispatch(fetchContacts())
	// }, [dispatch])

	{
		/* <div className='app-container'>
			<h1 className='title'>Phonebook</h1>
			<ContactForm />
			{contacts.length === 0 ? <b>Add contact</b> : <SearchBox />}
			<ContactList />
		</div> */
	}