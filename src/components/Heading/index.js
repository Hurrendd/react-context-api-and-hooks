import pTypes from 'prop-types';

import { useCounterContext } from '../../contexts/CounterContexts';

export const Heading = () => {
  const [state, actions] = useCounterContext();
  return <h1 style={{ fontsize: '60px' }}>Counter: {state.counter}</h1>;
};
