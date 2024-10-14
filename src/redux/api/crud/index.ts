import {api as index} from "..";

 const api = index.injectEndpoints({
    endpoints: (build) => ({
        getTodos: build.query<TODO.GetTodoResponse, TODO.GetTodoRequest>({
            query: () => ({
                url: "",
                method: "GET",
            }),
            providesTags: ["Todo"],
        }),
        postTodos :build.mutation<TODO.postTodoResponse, TODO.postTodoRequest>({
            query: (data) => ({
                url: "",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Todo"],
        }),
        deleteTodos: build.mutation<TODO.deleteResponse, TODO.deleteRequest>({
            query: (_id) => ({
                url: `${_id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Todo"],  
        }),
        editData: build.mutation<TODO.editResponse, TODO.editRequest>({
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