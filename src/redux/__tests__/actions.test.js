/* eslint-env jest */

import * as actions from '../actions';
import * as types from '../actionTypes';

import getDate from '../../Utils';

describe('actions', () => {
  it('should create an action to add a note', () => {
    const date = getDate();
    const expected = {
      type: types.ADD_NOTE,
      payload: {
        noteDate: date,
      },
    };

    expect(actions.addNote()).toEqual(expected);
  });

  it('should create an action to remove a note', () => {
    const id = 1;
    const expected = {
      type: types.REMOVE_NOTE,
      payload: {
        noteId: id,
      },
    };

    expect(actions.removeNote(id)).toEqual(expected);
  });
});
