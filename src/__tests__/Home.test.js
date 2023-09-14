import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Home from '../components/Home';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('renders Home page', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
