import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, SET_TODOS } from './todoActionTypes';

// id, title, coompleted


export const actionAddTodo = (title) => ({
  type: ADD_TODO,
  payload: title
});

export const actionDeleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
});

export const actionCompleteTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: id
});

export const actionSetTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos
});

export const actionSetTodosAsync = () => {
  return async (dispatch) => {
    const getTodos = async () => {
      try {
        return fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(todos => todos.json())
        // .then(json => json)

      } catch (error) {
        return {
          error
        }
      }
    }
    dispatch(actionSetTodos(await getTodos()));
  }
}

// export const actionIncAsync = (delta) => {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch(actionInc());
//     }, delta)
//   }
// };

// export const actionDecAsync = (delta) => {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch(actionDec());
//     }, delta)
//   }
// };

// export const actionDecAsync = (delta) => {
//   return (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
  .then(response => response.json())
  .then(json => console.log(json))
//       dispatch(actionDec());
//   }
// };