import styled from 'styled-components';

export default styled.div`
  background: ${props =>
    props.primary
      ? `linear-gradient(
    to bottom,
    ${props.theme.primary} 0%,
    #1f669d 100%,
    ${props.theme.primary} 100%
  )`
      : props.theme.white};
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  height: 100vh;
  text-align: center;
  width: 50%;
`;
