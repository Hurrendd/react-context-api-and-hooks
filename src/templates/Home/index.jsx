import { useCounterContext } from '../../contexts/CounterContexts';
import './styles.css';

export const Home = () => {
  const [state, dispatch] = useCounterContext();
  console.log(state);

  return <div>OI</div>;
};
