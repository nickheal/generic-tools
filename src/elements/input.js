import styled from 'styled-components';

export default styled.input`
  background-color: ${props => props.theme.white};
  border: solid 1px ${props => props.theme.primary};
  border-radius: 999em;
  color: ${props => props.theme.primary};
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize}rem;
  margin-right: 1em;
  padding: 0.6em 1em;
  min-width: 320px;
`;
