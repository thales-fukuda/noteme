import styled from 'styled-components';
import PropTypes from 'prop-types';

import Title from '../../elements/Title';

const Note = styled.section`
  padding: 25px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #CECECE;
  font-weight: bold;
  & > h2 {
    opacity: ${props => props.active}
  }
`;

Note.Title = Title;

Note.propTypes = {
  active: PropTypes.string,
};

Note.defaultProps = {
  active: '.5',
};

export default Note;
