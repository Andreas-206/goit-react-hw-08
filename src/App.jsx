import { Suspense, lazy, useEffect } from 'react'
import Layout from './components/Layout/Layout'
import { Routes, Route } from 'react-router-dom'
import { RestrictedRoute } from './RestrictedRoute.jsx'
import { PrivateRoute } from './PrivateRoute.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsRefreshing } from './redux/auth/selectors.js'
import { refreshUser } from './redux/auth/operations.js'
import { Toaster } from 'react-hot-toast'
import './App.css'

const Home = lazy(() => import('./pages/Home.jsx'))
const Login = lazy(() => import('./pages/LogIn.jsx'))
const Register = lazy(() => import('./pages/Register.jsx'))
const Contacts = lazy(() => import('./pages/Contacts.jsx'))

const App = () => {
	const isRefreshing = useSelector(selectIsRefreshing)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(refreshUser())
	}, [dispatch])

	return (
		<Layout>
			{isRefreshing ? (
				<b>Refreshing user, please wait...</b>
			) : (
				<Suspense fallback={<>loading</>}>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route
							path='/register'
							element={
								<RestrictedRoute
									component={<Register />}
									redirectTo='/contacts'
								/>
							}
						/>
						<Route
							path='/login'
							element={
								<RestrictedRoute component={<Login />} redirectTo='/contacts' />
							}
						/>
						<Route
							path='/contacts'
							element={
								<PrivateRoute component={<Contacts />} redirectTo='/login' />
							}
						/>
					</Routes>
				</Suspense>
			)}
			<Toaster />
		</Layout>
	)
}

export default App
