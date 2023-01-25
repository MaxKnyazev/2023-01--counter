import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionAddTodo, actionCompleteTodo, actionDeleteTodo, actionSetTodosAsync } from '../../store/todoStore/todoActionCreaters';
import './Todos.css';

const Todos = () => {
  const [inputValue, setInputValue] = useState('');
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  console.log(todos);

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  }

  const buttonAddHandler = () => {
    if (inputValue) {
      dispatch(actionAddTodo(inputValue));
      setInputValue('');
    }
  }

  // const buttonDeleteHandler = (id) => {
  //   dispatch(actionDeleteTodo(id));
  // }

  return (
    <div className = "todos">
      <div className="todos__form form">
        <button onClick={() => {dispatch(actionSetTodosAsync())}} className="form__get">Get todos from server</button>
        <input className="form__input" type="text" placeholder="todo" value={inputValue} onChange={inputHandler} />
        <button onClick={buttonAddHandler} className="form__add">Add</button>
      </div>

      <ul className="todos__list">
        {todos.map(todo => (
          <li key={todo.id} className="todos__item todo">
            <input onChange={() => {dispatch(actionCompleteTodo(todo.id))}} className="todo__complete" type="checkbox" checked={todo.completed} />
            <span className="todo__title">{todo.title}</span>
            <button onClick={() => {dispatch(actionDeleteTodo(todo.id))}} className="todo__delete">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos;