import styled from 'styled-components';

export default styled.header`
  background: linear-gradient(
    to right,
    ${props => props.theme.primary} 0%,
    #1f669d 100%,
    ${props => props.theme.primary} 100%
  );
  margin: 0;
  padding: 4em 6.4em 2.5em;
`;
