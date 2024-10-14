namespace TODO {
    type getTodoResponse = ICrud[];
    type getTodoRequest = void;

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