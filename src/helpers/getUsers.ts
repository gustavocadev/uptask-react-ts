export const getUsers = async () => {
	const response = await fetch('http://localhost:4000/api/users')
	const data = await response.json()
	return data as {}
}
