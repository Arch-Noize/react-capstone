import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Search from '../components/Search';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('renders Search component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
