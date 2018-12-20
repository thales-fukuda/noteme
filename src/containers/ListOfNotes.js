import { connect } from 'react-redux';
import { addNote, removeNote } from '../redux/actions';
import NoteList from '../components/NoteList';

const mapStateToProps = state => ({
  notes: state.notes.notes,
});

const mapDispatchToProps = dispatch => ({
  addNote: () => dispatch(addNote()),
  removeNote: id => dispatch(removeNote(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteList);
