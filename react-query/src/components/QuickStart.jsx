import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getTodos, postTodos } from './api'

export default function QuickStart() {
    const queryClient = useQueryClient()
    const query = useQuery("todos", getTodos)
    const mutation = useMutation(postTodos, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos')
        }
    });
    if (query.isLoading) {
        return 'Loading...'
    }

    if (query.error) {
        return 'Error....'
    }
    return (
        <div>
            <ul>
                {query.data.map((todo) => (<li key={todo.id}>
                    {todo.title}
                </li>))}
            </ul>
            <button onClick={() => {
                mutation.mutate(
                    {
                        id: Date.now(),
                        title: 'New list'
                    }
                )
            }}>ADD</button>
        </div>
    )
}
