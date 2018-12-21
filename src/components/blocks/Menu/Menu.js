import styled from 'styled-components';

// Elements
import Button from '../../elements/Button';
import Nav from './Nav';
import Note from './Note';

const Menu = styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  left: 0;
  top: 0;
  padding: 0 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

Menu.Button = Button;
Menu.Nav = Nav;
Menu.Note = Note;

export default Menu;
