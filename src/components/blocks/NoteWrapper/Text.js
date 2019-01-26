import styled from 'styled-components';

const Text = styled.textarea`
  min-height: calc(100vh - 190px);
  margin-top: 30px;
  font-family: 'Slabo 27px';
  font-size: 24px;
  width: 100%;
  height: auto;
  :focus{
    outline: none;
  }
`;

export default Text;
