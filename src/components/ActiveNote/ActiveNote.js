import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import NoteWrapper from '../blocks/NoteWrapper';

const ActiveNote = (props) => {
  const textTitle = useRef();
  const textBody = useRef();
  const {
    notes, activeNote, changeNoteTitle, changeNoteBody,
  } = props;

  const changeTextAreaSize = (el) => {
    const element = el;
    element.style.height = `${element.scrollHeight}px`;
  };

  const handleChangeTitle = (e, id) => {
    e.stopPropagation();
    changeNoteTitle(id, e.target.value);
    changeTextAreaSize(e.target);
  };

  const handleChangeBody = (e, id) => {
    e.stopPropagation();
    changeNoteBody(id, e.target.value);
    changeTextAreaSize(e.target);
  };

  const handleTitleKeyPress = (e) => {
    if (e.key === 'Enter') {
      textBody.current.focus();
    }
  };

  useEffect(() => {
    if (notes.length > 0) {
      changeTextAreaSize(textTitle.current);
      changeTextAreaSize(textBody.current);
    }
  });

  return (
    <NoteWrapper>
      {notes.length > 0
      && (
        <>
          <NoteWrapper.TitleText
            onChange={e => handleChangeTitle(e, notes[activeNote].id)}
            onKeyPress={e => handleTitleKeyPress(e)}
            ref={textTitle}
            value={notes[activeNote].noteTitle}
            name='title'
            maxLength='50'
          />
          <NoteWrapper.Text
            onChange={e => handleChangeBody(e, notes[activeNote].id)}
            ref={textBody}
            value={notes[activeNote].noteBody}
            name='body'
          />
        </>
      )
      }
    </NoteWrapper>
  );
};

ActiveNote.propTypes = {
  notes: PropTypes.instanceOf(Array).isRequired,
  activeNote: PropTypes.number,
  changeNoteTitle: PropTypes.func.isRequired,
  changeNoteBody: PropTypes.func.isRequired,
};

ActiveNote.defaultProps = {
  activeNote: 0,
};

export default ActiveNote;
