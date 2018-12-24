import styled from 'styled-components';

// Elements
import TitleText from './TitleText';
import Text from './Text';

const NoteWrapper = styled.article`
  margin-top: 70px;
  padding: 35px;
  box-sizing: border-box;
  overflow-x: hidden;
`;

NoteWrapper.TitleText = TitleText;
NoteWrapper.Text = Text;

export default NoteWrapper;
