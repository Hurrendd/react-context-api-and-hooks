import './styles.css';

import { useCounterContext } from '../../contexts/CounterContexts';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
export const Home = () => {
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions
      .asyncError()
      .then((res) => console.log(res))
      .catch((err) => console.log(err.name, ': ', err.message));
  };

  return (
    <div>
      <Heading />
      <div className="divflex">
        <Button onButtonClick={actions.increase}>Increase</Button>
        <Button onButtonClick={actions.decrement}>Decrease</Button>
        <Button onButtonClick={actions.reset}>Reset Counter</Button>
        <Button onButtonClick={() => actions.setCounter(10)}>Set 10</Button>
        <Button onButtonClick={() => actions.setCounter(100)}>Set 100</Button>
        <Button disabled={state.loading} onButtonClick={actions.asyncIncrease}>
          Async Increase
        </Button>
        <Button disabled={state.loading} onButtonClick={handleError}>
          Async Error
        </Button>
      </div>
      <div className="flex-container">
        <div className="divflex_item1">
          <p>Div 1</p>
        </div>
        <div className="divflex_item2">
          <p>Div 2</p>
        </div>
      </div>
    </div>
  );
};
