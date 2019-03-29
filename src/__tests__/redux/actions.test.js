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

  describe('changeNoteTitle', () => {
    it('Dispatches the correct action and payload', () => {
      const noteDate = getDate();
      const expectedAction = [
        {
          type: types.CHANGE_NOTE_TITLE,
          payload: {
            noteId: 1,
            noteDate,
            newTitle: 'TEST',
          },
        },
      ];
      store.dispatch(actions.changeNoteTitle(1, 'TEST'));
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  describe('changeNoteText', () => {
    it('Dispatches the correct action and payload', () => {
      const noteDate = getDate();
      const expectedAction = [
        {
          type: types.CHANGE_NOTE_BODY,
          payload: {
            noteId: 1,
            noteDate,
            newBody: 'TEST',
          },
        },
      ];
      store.dispatch(actions.changeNoteBody(1, 'TEST'));
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  describe('updateActiveNote', () => {
    it('Dispatches the correct action and payload', () => {
      const expectedAction = [
        {
          type: types.ACTIVE_NOTE,
          payload: {
            noteId: 1,
          },
        },
      ];
      store.dispatch(actions.updateActiveNote(1));
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
