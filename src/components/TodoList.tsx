"use client";
import React, { useState } from "react";
import scss from "./TodoList.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  useDeleteTodosMutation,
  useEditDataMutation,
  useGetTodosQuery,
  usePostTodosMutation,
} from "@/redux/api/crud";
import { useUploadFileMutation } from "@/redux/api/upload";
import Image from "next/image";

const TodoList = () => {
  const { register, handleSubmit, reset } = useForm<ICrud>();
  const {
    register: editRegister,
    handleSubmit: editHandleSubmit,
    reset: editReset,
    setValue,
  } = useForm<ICrud>();

  const [postData] = usePostTodosMutation();
  const [uploadPost] = useUploadFileMutation();
  const { data } = useGetTodosQuery();
  const [deleteData] = useDeleteTodosMutation();
  const [editData] = useEditDataMutation();
  const [editId, setEditId] = useState<number | null>(null);

  const onSubmit: SubmitHandler<IFiles> = async (data) => {
    try {
      const file = data.files[0];
      const formData = new FormData();
      formData.append("file", file);
      const responseImg = await uploadPost(formData).unwrap();
      const newData = {
        _id: data._id!,
        tittle: data.tittle,
        files: responseImg.url,
      };
      await postData(newData);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const editHandleSubmitClick: SubmitHandler<IFiles> = async (data) => {
    try {
      const file = data.files[0];
      const formData = new FormData();
      formData.append("file", file);
      const responseImg = await uploadPost(formData).unwrap();
      const newData = {
        _id: data._id!,
        tittle: data.tittle,
        files: responseImg.url,
      };

      await editData({ _id: editId!, updateTodo: newData });
      editReset();
      setEditId(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={scss.TodoList}>
      <div className="container">
        <div className={scss.content}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="file" {...register("files", { required: true })} />
            <input type="text" {...register("tittle", { required: true })} />
            <button type="submit">Add</button>
          </form>
          <div>
            {data?.map((el) => (
              <div key={el._id}>
                {editId ? (
                  <form onSubmit={editHandleSubmit(editHandleSubmitClick)}>
                    <input type="file" {...editRegister("files")} />
                    <input
                      type="text"
                      {...editRegister("tittle", { required: true })}
                    />
                    <button type="submit">Save</button>
                  </form>
                ) : (
                  <div>
                    <h1>{el.tittle}</h1>
                    <Image src={el.files} width={100} height={100} alt="" />
                    <button onClick={() => deleteData(el._id)}>Delete</button>
                    <button
                      onClick={() => {
                        setEditId(el._id!), setValue("tittle", el.tittle);
                        setValue("files", el.files);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
