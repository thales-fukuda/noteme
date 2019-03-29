/* eslint-env jest */

import notes from '../../../redux/reducers/notes';

describe('notes', () => {
  describe('initialState', () => {
    it('is correct', () => {
      const action = { type: 'FAKE_ACTION ' };
      const initialState = {
        activeNote: 0,
        notes: [
          {
            id: 0,
            noteTitle: 'Exemple',
            noteBody: 'This is an exemple.',
            isActive: true,
          },
        ],
      };

      expect(notes(undefined, action)).toEqual(initialState);
    });
  });
});
