import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useUsersMutation } from '../hooks/useUsersMutation'

type AllFormFields = {
	name: string
	email: string
	password: string
	password2: string
}

const Signup = () => {
	const { register, formState, handleSubmit, reset } = useForm<AllFormFields>()
	const usersMutation = useUsersMutation()
	const handleFormData = (data: AllFormFields) => {
		usersMutation.mutate({
			name: data.name,
			email: data.email,
			password: data.password,
		})

		if (usersMutation.isSuccess) {
			// show a toast
			toast.success(usersMutation.data?.msg)
			// reset the form
			reset()
		}
		if (usersMutation.isError) {
			// show a toast
			toast.error('Hubo un error al crear el usuario, por favor intente de nuevo')
		}
	}
	return (
		<>
			<h1 className="text-sky-600 font-black text-6xl">
				Crea tu cuenta y administra tus <span className="text-slate-700">proyectos</span>
			</h1>
			<form
				className="mt-10 bg-white shadow rounded-lg p-10"
				onSubmit={handleSubmit(handleFormData)}>
				<div>
					<label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="name">
						Name
					</label>
					<input
						type="text"
						id="name"
						placeholder="Name de registro"
						className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
						{...register('name', {
							required: {
								value: true,
								message: 'El nombre es obligatorio',
							},
						})}
					/>
					{formState.errors.name && (
						<p className="text-red-500 text-sm mt-2">{formState.errors.name.message}</p>
					)}
				</div>

				<div>
					<label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="email">
						Email
					</label>
					<input
						type="text"
						id="email"
						placeholder="Email de registro"
						className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
						{...register('email', {
							required: {
								value: true,
								message: 'El email es obligatorio',
							},
							validate: {
								emailFormat: (value) => {
									const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
									return emailRegex.test(value) || 'El email no es válido'
								},
							},
						})}
					/>
					{formState.errors.email && (
						<p className="text-red-500 text-sm mt-2">{formState.errors.email.message}</p>
					)}
				</div>

				<div className="mt-5">
					<label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="password">
						Password
					</label>
					<input
						type="text"
						id="password"
						placeholder="Password de registro"
						className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
						{...register('password', {
							required: {
								value: true,
								message: 'El password es obligatorio',
							},
						})}
					/>
					{formState.errors.password && (
						<p className="text-red-500 text-sm mt-2">{formState.errors.password.message}</p>
					)}
				</div>

				<div className="mt-5">
					<label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="password2">
						Repetir Password
					</label>
					<input
						type="text"
						id="password2"
						placeholder="Repetir password"
						className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
						{...register('password2', {
							required: {
								value: true,
								message: 'El password es obligatorio',
							},
						})}
					/>
					{formState.errors.password2 && (
						<p className="text-red-500 text-sm mt-2">{formState.errors.password2.message}</p>
					)}
				</div>

				<button
					type="submit"
					className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded cursor-pointer hover:bg-sky-800 transition-colors mt-5">
					Crear cuenta
				</button>
			</form>
			<nav className="lg:flex lg:justify-between">
				<Link to="/" className="block text-center my-5 text-slate-500 uppercase text-sm">
					¿Ya tienes una cuenta? Inicia sesión
				</Link>

				<Link
					to="/forgot-password"
					className="block text-center my-5 text-slate-500 uppercase text-sm">
					¿Olvidaste tu contraseña?
				</Link>
			</nav>
		</>
	)
}
export default Signup
