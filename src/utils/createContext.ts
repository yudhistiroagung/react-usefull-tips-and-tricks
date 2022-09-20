import React from 'react';

export const createCtx = <A extends {} | null>() => {
  const ctx = React.createContext<A | undefined>({} as A);

  const useCtx = () => {
    const c = React.useContext(ctx);

    if (c === undefined)
      throw new Error("useCtx must be inside a Provider with a value");
    return c;
  };

  return [ctx.Provider, useCtx] as const;
}