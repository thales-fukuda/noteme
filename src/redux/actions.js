import {
  ADD_NOTE,
  REMOVE_NOTE,
  CHANGE_NOTE_TITLE,
  CHANGE_NOTE_BODY,
} from './actionTypes';

export const addNote = () => ({
  type: ADD_NOTE,
});

export const removeNote = id => ({
  type: REMOVE_NOTE,
  payload: {
    noteId: id,
  },
});

export const changeNoteTitle = (id, title) => ({
  type: CHANGE_NOTE_TITLE,
  payload: {
    noteIndex: id,
    newTitle: title,
  },
});

export const changeNoteBody = (id, body) => ({
  type: CHANGE_NOTE_BODY,
  payload: {
    noteIndex: id,
    newBody: body,
  },
});
