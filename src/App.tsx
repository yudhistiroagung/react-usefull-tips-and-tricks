import React, { useRef, createRef, MutableRefObject } from 'react';
import logo from './logo.svg';
import './App.css';


import { useDidMount, useDidUnmount } from './hooks';
import { HideableContainer, HideableContainerType } from './components';

function App() {
  const ref = useRef<HideableContainerType>(null);

  useDidMount(() => {
    console.log('Component is mounted');
  });

  useDidUnmount(() => {
    console.log('Component is unmounted');
  });

  const show = (isShowing: boolean) => () => {
    if (isShowing) return ref.current?.show();

    return ref.current?.hide();
  }

  return (
    <div className="App">
      <HideableContainer ref={ref}>
        <p>THIS IS HIDEABLE</p>
      </HideableContainer>
      <button onClick={show(true)}>SHOW</button>
      <button onClick={show(false)}>HIDE</button>
    </div>
  );
}

export default App;
