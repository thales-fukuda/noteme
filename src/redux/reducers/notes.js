import {
  ADD_NOTE,
  REMOVE_NOTE,
  CHANGE_NOTE_TITLE,
  CHANGE_NOTE_BODY,
} from '../actionTypes';

const initialState = {
  notes: [
    {
      noteTite: 'Exemple',
      noteBody: 'This is and exemple.',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE: {
      return {
        ...state,
        notes: [...state.notes, { noteTitle: '', noteBody: '' }],
      };
    }
    case REMOVE_NOTE: {
      return {
        ...state,
        notes: state.notes.slice(action.payload.noteIndex, 1),
      };
    }
    case CHANGE_NOTE_TITLE: {
      const newNotes = [...state.notes];
      newNotes[action.payload.noteIndex].noteTitle = action.payload.newTitle;
      return {
        ...state,
        notes: newNotes,
      };
    }
    case CHANGE_NOTE_BODY: {
      const newNotes = [...state.notes];
      newNotes[action.payload.noteIndex].noteBody = action.payload.newBody;
      return {
        ...state,
        notes: newNotes,
      };
    }
    default:
      return state;
  }
};
