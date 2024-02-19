import styled from "styled-components";
import { Device } from '../styles/breackpoint';

export const Container = styled.main`
display: grid;
grid-template-columns: 1fr;
background-color: ${({ theme }) => theme.bgtotal};
.contentSideBar{
  display: none;
};
.contentMenuHamburger{
  display: block;
  position: absolute;
  left: 20px;
};
@media ${Device.tablet} {
  grid-template-columns: 65px 1fr;
  &.active {
    grid-template-columns: 220px 1fr;
  }
  .contentSideBar {
    display: initial;
  }
  .contentMenuHamburger {
    display: none;
  }
  .contentRoutes {
    grid-column: 1;
    width: 100%;
    @media ${Device.tablet} {
      grid-column: 2;
    }
  }
};
`;