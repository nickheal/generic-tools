import styled from 'styled-components';

export default styled.h1`
  color: ${props => (props.light ? props.theme.white : props.theme.dark)};
  font-weight: 300;
  letter-spacing: 0.025em;
  margin: 0;
  padding: 0;
`;
