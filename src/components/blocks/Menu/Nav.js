import styled from 'styled-components';

const Nav = styled.nav`
  height: calc(100% - 70px);
  width: 75%;
  position: fixed;
  top: 70px;
  left: 0;
  background-color: #f7efd9;
  transform: translate3d(-100%, 0, 0);
  transition: ease .3s transform;
  &.active{
    transform: translate3d(0, 0, 0);
  }
`;

export default Nav;
