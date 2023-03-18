import { Link } from 'react-router-dom'

const ForgotPassword = () => {
	return (
		<>
			<h1 className="text-sky-600 font-black text-6xl">
				Recupera tu acceso y no pierdas tus <span className="text-slate-700">proyectos</span>
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

				<button
					type="submit"
					className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded cursor-pointer hover:bg-sky-800 transition-colors mt-5">
					Enviar instrucciones
				</button>
			</form>
			<nav className="lg:flex lg:justify-between">
				<Link to="/" className="block text-center my-5 text-slate-500 uppercase text-sm">
					¿Ya tienes una cuenta? Inicia sesión
				</Link>

				<Link to="/signup" className="block text-center my-5 text-slate-500 uppercase text-sm">
					¿No tienes una cuenta? Regístrate
				</Link>
			</nav>
		</>
	)
}
export default ForgotPassword
