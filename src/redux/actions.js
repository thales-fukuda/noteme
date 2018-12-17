import {
  ADD_NOTE,
  REMOVE_NOTE,
  CHANGE_NOTE_TITLE,
  CHANGE_NOTE_BODY,
} from './actionTypes';

export const addNote = () => ({
  type: ADD_NOTE,
});

export const removeNote = index => ({
  type: REMOVE_NOTE,
  noteIndex: index,
});

export const changeNoteTitle = title => ({
  type: CHANGE_NOTE_TITLE,
  newTitle: title,
});

export const changeNoteBody = body => ({
  type: CHANGE_NOTE_BODY,
  newBody: body,
});
