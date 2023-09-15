import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Header from '../components/Header';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('renders Header component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
