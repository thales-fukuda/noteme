import {
  ADD_NOTE,
  REMOVE_NOTE,
  CHANGE_NOTE_TITLE,
  CHANGE_NOTE_BODY,
  ACTIVE_NOTE,
} from '../actionTypes';

const initialState = {
  activeNote: null,
  notes: [
    {
      id: Math.random().toString(),
      noteTitle: 'Exemple',
      noteBody: 'This is and exemple.',
    },
  ],
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_NOTE: {
      return {
        ...state,
        notes: [{ id: Math.random().toString(), noteTitle: 'Teste', noteBody: 'teste' }, ...state.notes],
      };
    }
    case REMOVE_NOTE: {
      return {
        ...state,
        notes: state.notes.filter(e => e.id !== action.payload.noteId),
      };
    }
    case CHANGE_NOTE_TITLE: {
      const newNotes = [...state.notes];
      const noteIndex = state.notes.findIndex(el => el.id === action.payload.noteId);
      newNotes[noteIndex].noteTitle = action.payload.newTitle;
      return {
        ...state,
        notes: newNotes,
      };
    }
    case CHANGE_NOTE_BODY: {
      const newNotes = [...state.notes];
      const noteIndex = state.notes.findIndex(el => el.id === action.payload.noteId);
      newNotes[noteIndex].noteBody = action.payload.newBody;
      return {
        ...state,
        notes: newNotes,
      };
    }
    case ACTIVE_NOTE: {
      return {
        ...state,
        activeNote: state.notes.findIndex(e => e.id === action.payload.noteId),
      };
    }
    default:
      return state;
  }
};
