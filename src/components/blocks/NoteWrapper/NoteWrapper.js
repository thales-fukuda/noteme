import styled from 'styled-components';

// Elements
import TitleText from './TitleText';
import Text from './Text';

const NoteWrapper = styled.article`
  margin-top: 70px;
  padding: 35px;
`;

NoteWrapper.TitleText = TitleText;
NoteWrapper.Text = Text;

export default NoteWrapper;
