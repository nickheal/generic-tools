import styled from 'styled-components';

export default styled.li`
  color: ${props => (props.primary ? props.theme.primary : props.theme.white)};
  margin-bottom: 0.5em;
`;
