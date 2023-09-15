import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Front from '../components/Front';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('renders Front book component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Front />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
