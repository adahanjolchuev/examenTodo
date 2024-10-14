namespace TODO {
    type GetTodoResponse = ICrud[];
    type GetTodoRequest = void;

    type postTodoResponse = ICrud[];
    type postTodoRequest = ICrud;

    type deleteResponse = ICrud[];
    type deleteRequest = number;

    type editResponse = ICrud[];
    type editRequest = {
        _id: number;
        updateTodo: ICrud;
    }

}