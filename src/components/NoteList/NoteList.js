import { connect } from 'react-redux';
import { addNote, removeNote, updateActiveNote } from '../../redux/actions';
import NoteListPresentational from './NoteListPresentational';

const mapStateToProps = state => ({
  notes: state.notes.notes,
  activeNote: state.notes.activeNote,
});

const mapDispatchToProps = dispatch => ({
  addNote: () => dispatch(addNote()),
  removeNote: id => dispatch(removeNote(id)),
  updateActiveNote: id => dispatch(updateActiveNote(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteListPresentational);
