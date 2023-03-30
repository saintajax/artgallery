import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const NavItem = styled(NavLink)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 102.52%;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: lightgrey;
  }
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
