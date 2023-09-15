import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MonsterList from '../components/MonsterList';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('renders CountryCards component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <MonsterList />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
