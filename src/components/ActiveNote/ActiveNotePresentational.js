import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NoteWrapper from '../blocks/NoteWrapper';

class ActiveNotePresentational extends Component {
  constructor(props) {
    super(props);
    this.textTitle = React.createRef();
    this.textBody = React.createRef();
  }

  componentDidMount = () => {
    this.changeTextAreaSize(this.textTitle.current);
    this.changeTextAreaSize(this.textBody.current);
  }

  changeTextAreaSize = (el) => {
    const element = el;
    element.style.height = `${element.scrollHeight}px`;
  };

  handleChangeTitle = (e, id) => {
    e.stopPropagation();
    const { changeNoteTitle } = this.props;
    changeNoteTitle(id, e.target.value);
    this.changeTextAreaSize(e.target);
  };

  handleChangeBody = (e, id) => {
    e.stopPropagation();
    const { changeNoteBody } = this.props;
    changeNoteBody(id, e.target.value);
    this.changeTextAreaSize(e.target);
  };

  render() {
    const { notes, activeNote } = this.props;
    return (
      <NoteWrapper>
        <NoteWrapper.TitleText
          onChange={e => this.handleChangeTitle(e, notes[activeNote].id)}
          ref={this.textTitle}
          value={notes[activeNote].noteTitle}
        />
        <NoteWrapper.Text
          onChange={e => this.handleChangeBody(e, notes[activeNote].id)}
          ref={this.textBody}
          value={notes[activeNote].noteBody}
        >
        </NoteWrapper.Text>
      </NoteWrapper>
    );
  }
}

ActiveNotePresentational.propTypes = {
  notes: PropTypes.instanceOf(Array).isRequired,
  activeNote: PropTypes.number.isRequired,
  changeNoteTitle: PropTypes.func.isRequired,
  changeNoteBody: PropTypes.func.isRequired,
};

export default ActiveNotePresentational;
