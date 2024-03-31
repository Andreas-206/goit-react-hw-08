import { Suspense, lazy } from 'react'
import Layout from './components/Layout/Layout'
import { Routes, Route } from 'react-router-dom'
import { RestrictedRoute } from './RestrictedRoute.jsx'
import { PrivateRoute } from './PrivateRoute.jsx'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useDispatch } from 'react-redux'

const HomePage = lazy(() => import('./pages/Home.jsx'))
const LoginPage = lazy(() => import('./pages/LogIn.jsx'))
const RegisterPage = lazy(() => import('./pages/Register.jsx'))
const ContactsPage = lazy(() => import('./pages/Contacts.jsx'))

const App = () => {
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
