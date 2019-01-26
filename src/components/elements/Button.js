import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  padding: 0;
  height: 32px;
  width: 32px;
  background-image: url(${props => props.icon});
  background-color: transparent;
  border: none;
`;

Button.propTypes = {
  icon: PropTypes.string,
};

Button.defaultProps = {
  icon: '',
};

export default Button;
