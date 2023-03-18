import { Route, Routes } from 'react-router-dom'
import AuthLayout from './layouts/Auth'
import Login from './routes/login'
import Signup from './routes/signup'
import ForgotPassword from './routes/forgot-password'
import NewPassword from './routes/new-password'
import ConfirmAccount from './routes/confirm-account'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<AuthLayout />}>
					<Route index element={<Login />} />
					<Route path="signup" element={<Signup />} />
					<Route path="forgot-password" element={<ForgotPassword />} />
					<Route path="forgot-password/:token" element={<NewPassword />} />
					<Route path="confirm/:id" element={<ConfirmAccount />} />
				</Route>
			</Routes>
			<ToastContainer />
		</>
	)
}

export default App
