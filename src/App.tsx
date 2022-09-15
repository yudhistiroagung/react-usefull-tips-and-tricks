import React, { useRef } from 'react';
import {
  ChakraProvider,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack
} from '@chakra-ui/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { useDidMount, useDidUnmount } from './hooks';
import {
  ComposeProvider,
  HideableContainer,
  HideableContainerRef
} from './components';

const queryClient = new QueryClient();

const AppQueryClientProvider: React.JSXElementConstructor<React.PropsWithChildren<any>> = ({ children }) =>
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

const Content = () => {
  const ref = useRef<HideableContainerRef>(null);

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
    <Container>
      <VStack spacing={4}>
        <HideableContainer ref={ref}>
          <FormControl py={2}>
            <FormLabel>Username</FormLabel>
            <Input placeholder='Insert a username' />
          </FormControl>
        </HideableContainer>
        <Button onClick={show(true)}>SHOW</Button>
        <Button onClick={show(false)}>HIDE</Button>
      </VStack>
    </Container>
  );
}

const App = () => {
  return (
    <ComposeProvider
      components={[
        ChakraProvider,
        AppQueryClientProvider
      ]}>
      <Content />
    </ComposeProvider>
  );
}

export default App;
