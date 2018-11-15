import React from 'react';
import styled from 'styled-components';
import { Fieldset } from '../../elements';

export default function PointsChoice(props) {
  const { options, onChange, points } = props;

  return (
    <Container>
      <Legend>I think this story is worth...</Legend>
      {options.map(option => (
        <React.Fragment key={option}>
          <SInput
            id={`option-${option}`}
            type="radio"
            name="points-choice"
            value={option}
            checked={+points === option}
            onChange={e => onChange(e.target.value)}
          />
          <SLabel htmlFor={`option-${option}`}>{option}</SLabel>
        </React.Fragment>
      ))}
      <Legend>...points</Legend>
    </Container>
  );
}

const Container = styled(Fieldset)`
  display: block;
  width: 100%;
`;
const Legend = styled.legend``;
const SInput = styled.input`
  left: -9999px;
  opacity: 0;
  position: absolute;
  top: -9999px;

  :checked {
    + label {
      color: ${props => props.theme.white};
      position: relative;

      &:after {
        background-color: ${props => props.theme.white};
        border-radius: 999em;
        content: '';
        left: 0;
        position: absolute;
        top: 100%;
        width: 100%;
        height: 2px;
      }
    }
  }
`;
const SLabel = styled.label`
  color: ${props => props.theme.white};
  cursor: pointer;
  display: inline-block;
  font-size: ${props => props.fontSize * 1.5}rem;
  margin-bottom: 0.5em;
  padding: 0.5em 0.5em 0.25em;
  transition: transform 200ms;

  &:hover {
    transform: scale(1.1);
  }
`;
