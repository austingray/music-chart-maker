import styled from 'styled-components';
import { fontSecondary } from '../utility/fonts';
import { white } from '../utility/colors';
import { boxShadow, boxShadowHover, boxShadowActive } from '../utility/shadows';
import { slow } from '../utility/transitions';

export default styled.a`
  ${fontSecondary}
  ${boxShadow}
  ${slow}
  display: inline-block;
  padding: 7px 12px;
  font-size: 18px;
  background: ${white};
  margin: 7px;
  cursor: pointer;
  &:hover {
    ${boxShadowHover}
  }
  &:active {
    ${boxShadowActive}
  }
`;
