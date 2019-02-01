import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Menu from '../blocks/Menu';

// Assets
import icMenu from '../../assets/icons/menu.svg';
import icMinus from '../../assets/icons/minus.svg';
import icPlus from '../../assets/icons/plus.svg';

class NoteListPresentational extends Component {
  state = { menuOpen: false };

  toggleNav = () => {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  handleActiveNote = (e, id) => {
    e.stopPropagation();
    const { updateActiveNote } = this.props;
    updateActiveNote(id);
    if (!window.matchMedia(' (min-width: 726px) ').matches) {
      this.toggleNav();
    }
  };

  handleRemoveNote = (e, id) => {
    e.stopPropagation();
    const { removeNote } = this.props;
    removeNote(id);
  };


  render() {
    const { menuOpen } = this.state;
    const {
      notes,
      addNote,
      activeNote,
    } = this.props;
    return (
      <Menu bgColor='#F9CA24'>
        {
          window.matchMedia(' (min-width: 726px) ').matches
            ? <Menu.Button icon={icPlus} onClick={addNote} />
            : <>
              <Menu.Button icon={icMenu} onClick={this.toggleNav} />
              <Menu.Button icon={icPlus} onClick={addNote} />
              </>
        }
        <Menu.Nav className={menuOpen ? 'active' : ''} bgColor='#F2F2F2'>
          {notes.length > 0
          && notes.map((el, index) => (
            <Menu.Note
              key={el.id}
              onClick={e => this.handleActiveNote(e, el.id)}
              active={activeNote === index ? '1' : '.5'}
            >
              <Menu.Note.Title>{el.noteTitle}</Menu.Note.Title>
              <Menu.Button icon={icMinus} onClick={e => this.handleRemoveNote(e, el.id)} />
            </Menu.Note>
          ))
          }
        </Menu.Nav>
        { menuOpen && <Menu.CloseMenu onClick={this.toggleNav} /> }
      </Menu>
    );
  }
}

NoteListPresentational.propTypes = {
  notes: PropTypes.instanceOf(Array).isRequired,
  addNote: PropTypes.func.isRequired,
  removeNote: PropTypes.func.isRequired,
  activeNote: PropTypes.number.isRequired,
  updateActiveNote: PropTypes.func.isRequired,
};

export default NoteListPresentational;
