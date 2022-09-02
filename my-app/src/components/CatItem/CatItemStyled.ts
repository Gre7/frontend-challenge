import styled from 'styled-components';

export const StyledCatItem = styled('div')`
  position: relative;
  padding: 12px;
  .heart-button {
    display: none;
  }
  :hover {
    box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.24),
      0px 9px 18px rgba(0, 0, 0, 0.18);
    .heart-button {
      display: block;
    }
  }
`;

export const StyledCatItemImg = styled('img')`
  width: 225px;
  height: 225px;
`;

export const StyledHeartIconButton = styled('button')`
  position: absolute;
  background: none;
  border: none;
  top: 75%;
  left: 70%;
  cursor: pointer;
`;
