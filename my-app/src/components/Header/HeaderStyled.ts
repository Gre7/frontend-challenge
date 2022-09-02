import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled('div')`
  display: flex;
  background: #2196f3;
  height: 64px;
  padding-left: 62px;
`;

export const StyledHeaderButtonsContainer = styled('div')`
  display: flex;
  max-width: 300px;
  width: 100%;
`;

export const StyledHeaderButton = styled('button')`
  border: none;
  background: #2196f3;
  padding: 20px;
  cursor: pointer;
  color: white;
  :hover {
    color: rgba(255, 255, 255, 0.7);
    background: #1e88e5;
  }
`;

export const StyledHeaderNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  &[class*='active'] {
    color: red;
  }
`;
