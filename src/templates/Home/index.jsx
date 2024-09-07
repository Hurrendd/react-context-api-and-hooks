import { useCounterContext } from '../../contexts/CounterContexts';
import './styles.css';

export const Home = () => {
  const [state, actions] = useCounterContext();

  return (
    <div>
      <h1 onClick={() => actions.increase()}>Disparar</h1>
    </div>
  );
};
