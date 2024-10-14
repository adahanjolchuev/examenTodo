import {api as index} from "..";

 const api = index.injectEndpoints({
    endpoints: (build) => ({
        getTodos: build.query<Todo.getTodoResponse, Todo.getTodoRequest>({
            query: () => ({
                url: "",
                method: "GET",
            }),
            providesTags: ["Todo"],
        }),
        postTodos :build.mutation<Todo.postTodoResponse, Todo.postTodoRequest>({
            query: (data) => ({
                url: "",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Todo"],
        }),
        deleteTodos: build.mutation<Todo.deleteResponse, Todo.deleteRequest>({
            query: (_id) => ({
                url: `${_id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Todo"],  
        }),
        editData: build.mutation<Todo.editResponse, Todo.editRequest>({
            query: ({_id, updateTodo}) => ({
                url: `${_id}`,
                method: "PATCH",
                body: updateTodo
            }),
            invalidatesTags: ["Todo"],
        })
    }),
})

export const { useGetTodosQuery, usePostTodosMutation, useDeleteTodosMutation, useEditDataMutation } = api