import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Menu from './blocks/Menu';

// Assets
import icMenu from '../assets/icons/menu.svg';
import icMinus from '../assets/icons/minus.svg';
import icPlus from '../assets/icons/plus.svg';

class NoteList extends Component {
  state = { menuOpen: false };

  toggleNav = () => {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen,
    }));
  }

  render() {
    const { menuOpen } = this.state;
    const { notes, addNote, removeNote, activeNote } = this.props;
    return (
      <Menu bgColor='#F9CA24'>
        <Menu.Button icon={icMenu} onClick={this.toggleNav} />
        <Menu.Button icon={icPlus} onClick={addNote} />
        <Menu.Nav className={menuOpen ? 'active' : ''} bgColor='#E5E5E5'>
          {notes.map(el => (
            <Menu.Note key={el.id} onClick={() => activeNote(el.id)}>
              <Menu.Note.Title>{el.noteTitle}</Menu.Note.Title>
              <Menu.Button icon={icMinus} onClick={() => removeNote(el.id)} />
            </Menu.Note>
          ))}
        </Menu.Nav>
      </Menu>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.instanceOf(Array).isRequired,
  addNote: PropTypes.func.isRequired,
  removeNote: PropTypes.func.isRequired,
  activeNote: PropTypes.func.isRequired,
};

export default NoteList;
