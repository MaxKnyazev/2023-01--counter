import CounterDisplay from '../CounterDisplay';
import './Counter.css';
import ChangeButton from '../ChangeButton';

const Counter = () => {
  return (
    <div className = 'counter'>
      <CounterDisplay />

      <div className='counter__buttons'>
        <ChangeButton sign='+' />
        <ChangeButton sign='-' />
      </div>

      <div className='counter__buttons'>
        <ChangeButton sign='++' />
        <ChangeButton sign='--' />
      </div>

    </div>
  )
}

export default Counter;