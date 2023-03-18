import { Outlet } from 'react-router-dom'

const Auth = () => {
	return (
		<>
			<main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center ">
				<section className="md:w-2/3 lg:w-2/5">
					<Outlet />
				</section>
			</main>
		</>
	)
}
export default Auth
