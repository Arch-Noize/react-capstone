import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setSource } from '../redux/monster/monsterSlice';

const test = [thunk];
const mockStore = configureMockStore(test);

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('Testing if monsterSLice reducer works', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      monsters: [],
      monsterStats: [],
      source: '',
      isLoading: true,
    });
  });

  it('should set the book', () => {
    const source = 'wotc-srd';
    const expectedAction = {
      type: 'monsters/setSource',
      payload: source,
    };

    store.dispatch(setSource(source));
    expect(store.getActions()).toEqual([expectedAction]);
  });
});
