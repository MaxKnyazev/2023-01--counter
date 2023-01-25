import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, SET_TODOS_SUCCESS, SET_TODOS_PENDING, SET_TODOS_ERROR } from './todoActionTypes';

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

export const actionSetTodosSuccess = (todos) => ({
  type: SET_TODOS_SUCCESS,
  payload: todos
});

export const actionSetTodosPending = () => ({
  type: SET_TODOS_PENDING,
});

export const actionSetTodosError = (error) => ({
  type: SET_TODOS_ERROR,
  payload: error
});

export const actionSetTodosAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(actionSetTodosPending());
      let todos = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      todos = await todos.json();
      console.log(todos);
      if (JSON.stringify(todos) !== '{}') {
        dispatch(actionSetTodosSuccess(todos));
      } else {
        throw new Error('Ошибка при получении todos');
      }
      console.log('=============================================================')
      // return todos;
    } catch (error) {
      dispatch(actionSetTodosError(error.message));
      // return {
      //   error
      // }
    }
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