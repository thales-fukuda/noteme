import {
  ADD_NOTE,
  REMOVE_NOTE,
  CHANGE_NOTE_TITLE,
  CHANGE_NOTE_BODY,
  ACTIVE_NOTE,
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
    noteId: id,
    newTitle: title,
  },
});

export const changeNoteBody = (id, body) => ({
  type: CHANGE_NOTE_BODY,
  payload: {
    noteId: id,
    newBody: body,
  },
});

export const updateActiveNote = id => ({
  type: ACTIVE_NOTE,
  payload: {
    noteId: id,
  },
});
