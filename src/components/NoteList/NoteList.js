import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Menu from '../blocks/Menu';

// Assets
import icMenu from '../../assets/icons/menu.svg';
import icMinus from '../../assets/icons/minus.svg';
import icPlus from '../../assets/icons/plus.svg';

const NoteList = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    notes,
    addNote,
    activeNote,
    removeNote,
    updateActiveNote,
  } = props;

  const toggleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const handleActiveNote = (e, id) => {
    e.stopPropagation();
    updateActiveNote(id);
    if (!window.matchMedia(' (min-width: 726px) ').matches) {
      toggleNav();
    }
  };

  const handleRemoveNote = (e, id) => {
    e.stopPropagation();
    removeNote(id);
  };

  return (
    <Menu bgColor='#F9CA24'>
      {
        window.matchMedia(' (min-width: 726px) ').matches
          ? <Menu.Button icon={icPlus} onClick={addNote} />
          : (
            <>
              <Menu.Button icon={icMenu} onClick={toggleNav} />
              <Menu.Button icon={icPlus} onClick={addNote} />
            </>
          )
      }
      <Menu.Nav className={menuOpen ? 'active' : ''} bgColor='#F2F2F2'>
        {notes.length > 0
        && notes.map((el, index) => (
          <Menu.Note
            key={el.id}
            onClick={e => handleActiveNote(e, el.id)}
          >
            <Menu.TitleWrapper active={activeNote === index ? '1' : '.5'}>
              <Menu.Note.Title>{el.noteTitle}</Menu.Note.Title>
              <p>{el.noteDate}</p>
            </Menu.TitleWrapper>
            <Menu.Button
              icon={icMinus}
              onClick={e => handleRemoveNote(e, el.id)}
            />
          </Menu.Note>
        ))
        }
      </Menu.Nav>
      { menuOpen && <Menu.CloseMenu onClick={toggleNav} /> }
    </Menu>
  );
};

NoteList.propTypes = {
  notes: PropTypes.instanceOf(Array).isRequired,
  activeNote: PropTypes.number,
  addNote: PropTypes.func.isRequired,
  removeNote: PropTypes.func.isRequired,
  updateActiveNote: PropTypes.func.isRequired,
};

NoteList.defaultProps = {
  activeNote: 0,
}

export default NoteList;
