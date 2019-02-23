import { connect } from 'react-redux';
import { changeNoteTitle, changeNoteBody } from '../../redux/actions';
import ActiveNote from './ActiveNote';

const mapStateToProps = state => ({
  notes: state.notes.notes,
  activeNote: state.notes.activeNote,
});

const mapDispatchToProps = dispatch => ({
  changeNoteTitle: (id, title) => dispatch(changeNoteTitle(id, title)),
  changeNoteBody: (id, body) => dispatch(changeNoteBody(id, body)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActiveNote);
