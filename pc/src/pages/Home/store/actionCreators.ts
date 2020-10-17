import * as Types from "./actionTypes"

type AddTodoAction = ReturnType<typeof createAddTodo>

type RemoveTodoAction = ReturnType<typeof createRemoveTodo>

type ChangeNameAction = ReturnType<typeof changeName>


export type Actions = AddTodoAction | RemoveTodoAction | ChangeNameAction

export const createAddTodo = (text: string) => ({
  type: Types.ADD_TODO,
  payload: text,
})

export const createRemoveTodo = (id: number) => ({
  type: Types.REMOVE_TODO,
  payload: id,
})

export const changeName = (name: string) => ({
  type: Types.CHANGE_NAME,
  payload: name
})