import React from 'react';

interface Props {
  components: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>
  children?: React.ReactNode
}

export const ComposeProvider: React.FC<Props> = ({
  children = React.Fragment,
  components = []
}) => {
  return components
    .reverse()
    .reduce((acc, Component) => {
      return <Component>{acc}</Component>
    }, children as React.ReactComponentElement<any>);
};