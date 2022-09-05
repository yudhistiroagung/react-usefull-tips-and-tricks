import { renderHook } from '@testing-library/react';

import useDidMount from '../useDidMount';

describe('useDidMount tests', () => {
  it('effect should be called when component is mounteed', () => {
    const mockCallback = jest.fn();

    renderHook(() => useDidMount(mockCallback));

    expect(mockCallback).toBeCalled()
  });
});