import {
  ADD_NOTE,
  REMOVE_NOTE,
  CHANGE_NOTE_TITLE,
  CHANGE_NOTE_BODY,
  ACTIVE_NOTE,
} from '../actionTypes';

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

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_NOTE: {
      return {
        ...state,
        activeNote: 0,
        notes: [
          {
            id: state.notes.reduce((maxId, note) => Math.max(note.id, maxId), -1) + 1,
            noteTitle: 'New note',
            noteBody: '',
            isActive: true,
            noteDate: action.payload.noteDate,
          }, ...state.notes],
      };
    }
    case REMOVE_NOTE: {
      return {
        ...state,
        activeNote: state.notes.length - 1 > state.activeNote
          ? state.activeNote
          : state.activeNote - 1,
        notes: state.notes.filter(e => e.id !== action.payload.noteId),
      };
    }
    case CHANGE_NOTE_TITLE: {
      const newNotes = [...state.notes];
      const noteIndex = state.notes.findIndex(el => el.id === action.payload.noteId);
      newNotes[noteIndex].noteTitle = action.payload.newTitle;
      newNotes[noteIndex].noteDate = action.payload.noteDate;
      return {
        ...state,
        activeNote: 0,
        notes: [newNotes[noteIndex], ...newNotes.filter(el => el.id !== action.payload.noteId)],
      };
    }
    case CHANGE_NOTE_BODY: {
      const newNotes = [...state.notes];
      const noteIndex = state.notes.findIndex(el => el.id === action.payload.noteId);
      newNotes[noteIndex].noteBody = action.payload.newBody;
      newNotes[noteIndex].noteDate = action.payload.noteDate;
      return {
        ...state,
        activeNote: 0,
        notes: [newNotes[noteIndex], ...newNotes.filter(el => el.id !== action.payload.noteId)],
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
