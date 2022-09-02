import React, { useState, useImperativeHandle, forwardRef, ReactNode, ForwardRefRenderFunction, ElementRef } from 'react';

type Props = {
  children: ReactNode;
};

type Handle = {
  show: () => void;
  hide: () => void;
}

export const HideableContainer = forwardRef<Handle, Props>(({ children }, ref) => {
  const [show, setShow] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => setShow(true),
    hide: () => setShow(false),
  }));

  if (!show) return null;

  return (
    <>
      {children}
    </>
  );
});

export type HideableContainerType = ElementRef<typeof HideableContainer>;