import styled from 'styled-components';

const Button = styled.button`
  padding: 0;
  height: 42px;
  width: 42px;
  background-image: url(${props => props.icon});
  background-color: transparent;
  border: none;
`;

export default Button;
