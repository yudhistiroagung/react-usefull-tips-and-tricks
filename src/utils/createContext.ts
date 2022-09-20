import React, { ProviderExoticComponent, ProviderProps } from 'react';

export const createContext = <A extends {} | null>() => {
  const ctx = React.createContext<A | undefined>({} as A);
  const Provider = ctx.Provider as ProviderExoticComponent<ProviderProps<A>>;

  const useCtx = () => {
    const c = React.useContext(ctx);

    if (c === undefined)
      throw new Error("useCtx must be inside a Provider with a value");
    return c;
  };

  return [Provider, useCtx] as const;
}