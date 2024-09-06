import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/global-styles.css';

import { Home } from './templates/Home';
import { CounterContextProvider } from './contexts/CounterContexts';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <CounterContextProvider>
    <Home tab="home" />
  </CounterContextProvider>,
);
