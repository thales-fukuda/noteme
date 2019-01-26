import styled from 'styled-components';

// Elements
import TitleText from './TitleText';
import Text from './Text';

const NoteWrapper = styled.article`
  margin-top: 70px;
  padding: 35px;
  box-sizing: border-box;
  overflow-x: hidden;

  @media ( min-width: 726px) {
    margin-left: 40%;
  }
`;

NoteWrapper.TitleText = TitleText;
NoteWrapper.Text = Text;

export default NoteWrapper;
