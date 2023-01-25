import './CounterDisplay.css';
import { useSelector } from 'react-redux';

const CounterDisplay = () => {
  const count = useSelector(state => state.counter.count);
  return (
    <span className='counter__display'>{count}</span>
  )
}

export default CounterDisplay;