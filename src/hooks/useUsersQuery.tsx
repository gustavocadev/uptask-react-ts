import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../helpers/getUsers'
export const useUsersQuery = () => {
	const query = useQuery(['users'], getUsers)
	return query
}
