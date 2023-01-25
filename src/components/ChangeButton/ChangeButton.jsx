import './ChangeButton.css';
import { useSelector, useDispatch } from 'react-redux';
import { actionInc, actionDec, actionIncAsync, actionDecAsync } from '../../store/countStore/countActionCreaters';

const ChangeButton = ({sign}) => {
  const dispatch = useDispatch()
  const delta = useSelector(store => store.counter.delta);

  const buttonHander = () => {
    console.log('buttonPlusHandler');

    switch (sign) {
      case '+': 
        dispatch(actionInc());
        break;
      case '-': 
        dispatch(actionDec());
        break;
      
      case '++': 
        dispatch(actionIncAsync(delta));
        break;
      case '--': 
        dispatch(actionDecAsync(delta));
        break;

      default: return null;
    }
  }

  return (
    <button className='counter__button' onClick={buttonHander}>{sign}</button>
  )
}

export default ChangeButton;