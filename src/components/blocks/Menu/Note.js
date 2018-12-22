import styled from 'styled-components';
import Title from '../../elements/Title';

const Note = styled.section`
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #CECECE;
`;

Note.Title = Title;

export default Note;
