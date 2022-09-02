import React from 'react';

import { HeaderProps } from './HeaderTypes';
import {
  StyledHeader,
  StyledHeaderButtonsContainer,
  StyledHeaderButton,
  StyledHeaderNavLink,
} from './HeaderStyled';

const Header = (props: HeaderProps) => {
  return (
    <StyledHeader>
      <StyledHeaderButtonsContainer>
        <StyledHeaderButton>
          <StyledHeaderNavLink to="/">Все котики</StyledHeaderNavLink>
        </StyledHeaderButton>
        <StyledHeaderButton>
          <StyledHeaderNavLink to="/favorite">
            Любимые котики
          </StyledHeaderNavLink>
        </StyledHeaderButton>
      </StyledHeaderButtonsContainer>
    </StyledHeader>
  );
};

export default Header;
