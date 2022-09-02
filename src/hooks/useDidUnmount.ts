import { useEffect, useMemo } from 'react';

type CallbackType = () => void;

const useDidUnmount = (callback: CallbackType) => {
  const memoizedCallback = useMemo(() => callback, [callback]);
  useEffect(() => {
    // empty effect
    return () => memoizedCallback();
  }, [memoizedCallback]);
};

export default useDidUnmount;