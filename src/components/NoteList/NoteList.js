import { connect } from 'react-redux';
import { addNote, removeNote, activeNote } from '../../redux/actions';
import NoteListPresentational from './NoteListPresentational';

const mapStateToProps = state => ({
  notes: state.notes.notes,
});

const mapDispatchToProps = dispatch => ({
  addNote: () => dispatch(addNote()),
  removeNote: id => dispatch(removeNote(id)),
  activeNote: id => dispatch(activeNote(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteListPresentational);
