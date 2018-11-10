import styled from 'styled-components';

export default styled.button`
  background-color: ${props =>
    props.primary ? props.theme.primary : props.theme.white};
  border: solid 1px
    ${props => (props.primary ? props.theme.white : props.theme.primary)};
  border-radius: 999em;
  color: ${props => (props.primary ? props.theme.white : props.theme.primary)};
  cursor: pointer;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize}rem;
  padding: 0.6em 1.2em;
`;
