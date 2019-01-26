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
  z-index: 3;
  &.active{
    transform: translate3d(0, 0, 0);
  }

  @media (min-width: 726px) {
    width: 40%;
    transform: translate3d(0, 0, 0);
    box-shadow: 3px 0 6px rgba(0, 0, 0, .16);
  }
`;

export default Nav;
