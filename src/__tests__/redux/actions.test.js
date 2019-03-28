/* eslint-env jest */

import configureStore from 'redux-mock-store';

import * as actions from '../../redux/actions';
import * as types from '../../redux/actionTypes';

import getDate from '../../Utils';

const mockStore = configureStore();
const store = mockStore();

describe('actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('addNote', () => {
    it('Dispatches the correct action and payload', () => {
      const noteDate = getDate();
      const expectedAction = [
        {
          type: types.ADD_NOTE,
          payload: {
            noteDate,
          },
        },
      ];
      store.dispatch(actions.addNote());
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  describe('removeNote', () => {
    it('Dispatches the correct action and payload', () => {
      const expectedAction = [
        {
          type: types.REMOVE_NOTE,
          payload: {
            noteId: 1,
          },
        },
      ];
      store.dispatch(actions.removeNote(1));
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
