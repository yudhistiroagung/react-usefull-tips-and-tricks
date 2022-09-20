import React, { FC, useState } from 'react';
import { createContext } from './utils/createContext';

interface CounterContextValue {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const [ContextProvider, useContext] = createContext<CounterContextValue>();

const useCounter = (): CounterContextValue => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  }

  const decrement = () => {
    setCount(prev => prev - 1);
  }

  return {
    count,
    increment,
    decrement
  };
};

const useCounterContext = useContext;

const CounterProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const value = useCounter();

  return (
    <ContextProvider value={value}>
      {children}
    </ContextProvider>
  );
}

export { CounterProvider, useCounterContext };
