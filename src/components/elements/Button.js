import styled from 'styled-components';

const Button = styled.button`
  padding: 0;
  height: 32px;
  width: 32px;
  background-image: url(${props => props.icon});
  background-color: transparent;
  border: none;
`;

export default Button;
