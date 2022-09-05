import { useEffect, useMemo } from 'react';

type CallbackType = () => void | (() => Promise<void>);

const useDidMount = (callback: CallbackType) => {
  const memoizedCallback = useMemo(() => callback, [callback]);
  useEffect(() => {
    memoizedCallback();
  }, [memoizedCallback]);
};

export default useDidMount;