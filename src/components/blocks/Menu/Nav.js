import styled from 'styled-components';

const Nav = styled.nav`
  height: calc(100vh - 70px);
  width: 75%;
  position: fixed;
  top: 70px;
  left: 0;
  background-color: ${props => props.bgColor};
  transform: translate3d(-100%, 0, 0);
  transition: ease .3s transform;
  overflow: scroll;
  &.active{
    transform: translate3d(0, 0, 0);
  }
`;

export default Nav;
