import { useMutation } from '@tanstack/react-query'
import type { CreateUserResponse } from '../types/User'

type CreateUserProps = {
	email: string
	name: string
	password: string
}

export const createUser = async (data: CreateUserProps) => {
	const response = await fetch('http://localhost:4000/api/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
	const result = (await response.json()) as {
		msg: string
	}
	return result
}

export const useUsersMutation = () => {
	const mutation = useMutation(createUser)
	return mutation
}
