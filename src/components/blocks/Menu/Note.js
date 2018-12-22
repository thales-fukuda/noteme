import styled from 'styled-components';
import Title from '../../elements/Title';

const Note = styled.section`
  padding: 25px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #CECECE;
  font-family: 'Lato';
  font-weight: bold;
`;

Note.Title = Title;

export default Note;
