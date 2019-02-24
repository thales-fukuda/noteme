import styled from 'styled-components';

const TitleWrapper = styled.section`
  width: 100%;
  height: 100%;
  
  h2 {
    opacity: ${props => props.active}
  }

  p {
    font-family: 'Lato';
    font-size: 13px;
    font-weight: 200;
    color: #bcbcbc;
  }
`;

export default TitleWrapper;
