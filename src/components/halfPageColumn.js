import styled from 'styled-components';

export default styled.div`
  align-items: center;
  background: ${props =>
    props.primary
      ? `linear-gradient(
    to bottom,
    ${props.theme.primary} 0%,
    #1f669d 100%,
    ${props.theme.primary} 100%
  )`
      : props.secondary
      ? props.theme.white
      : 'transparent'};
  display: flex;
  flex-wrap: nowrap;
  height: ${props => (props.foreground ? 'initial' : '100vh')};
  left: ${props => (props.background && props.primary ? '50%' : 'initial')};
  position: ${props => (props.background ? 'fixed' : 'initial')};
  text-align: center;
  width: 50%;
  z-index: ${props => (props.background ? -1 : 'initial')};
`;
