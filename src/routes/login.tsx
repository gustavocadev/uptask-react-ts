import { Link } from 'react-router-dom'

const Login = () => {
	// useFormAction()
	return (
		<>
			<h1 className="text-sky-600 font-black text-6xl">
				Inicia sesion y administra tus <span className="text-slate-700">proyectos</span>
			</h1>
			<form className="mt-10 bg-white shadow rounded-lg p-10">
				<div>
					<label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="email">
						Email
					</label>
					<input
						type="text"
						id="email"
						placeholder="Email de registro"
						className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
					/>
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
					/>
				</div>

				<button
					type="submit"
					className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded cursor-pointer hover:bg-sky-800 transition-colors mt-5">
					Iniciar sesion
				</button>
			</form>
			<nav className="lg:flex lg:justify-between">
				<Link to="/signup" className="block text-center my-5 text-slate-500 uppercase text-sm">
					No tienes cuenta? Registrate
				</Link>

				<Link
					to="/forgot-password"
					className="block text-center my-5 text-slate-500 uppercase text-sm">
					Olvidaste tu password?
				</Link>
			</nav>
		</>
	)
}
export default Login
