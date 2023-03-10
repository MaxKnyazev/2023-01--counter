import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, SET_TODOS_SUCCESS, SET_TODOS_PENDING, SET_TODOS_ERROR } from './todoActionTypes';

const initialState = {
  todos: [
    {
      id: 1,
      title: 'Learn JS',
      completed: false,
    },

    {
      id: 2,
      title: 'Learn Math',
      completed: true,
    },

    {
      id: 3,
      title: 'Learn English',
      completed: false,
    }
  ],
  isLoading: false,
  error: ''
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      }
      return {...state, todos: [...state.todos, newTodo]}

    case COMPLETE_TODO:
      return {...state, todos: state.todos.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      })}

    case DELETE_TODO:
      return {...state, todos: state.todos.filter(todo => action.payload !== todo.id)}
    
    case SET_TODOS_PENDING:
      return {...state, isLoading: true}

    case SET_TODOS_SUCCESS:
      return {...state, todos: action.payload, isLoading: false, error: ''}
    
    case SET_TODOS_ERROR:
      return {...state, error: action.payload, isLoading: false}
      
    default:
      return state
  }
}