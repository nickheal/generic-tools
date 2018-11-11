import React from 'react';
import styled from 'styled-components';

const SInput = styled.input`
  left: -9999px;
  opacity: 0;
  position: absolute;
  top: -9999px;

  :checked {
    + label {
      color: ${props => props.theme.primary};
      position: relative;

      &:after {
        background-color: ${props => props.theme.primary};
        content: '';
        left: 0;
        position: absolute;
        top: 100%;
        width: 100%;
        height: 4px;
      }
    }
  }
`;
const SLabel = styled.label`
  color: ${props => props.theme.dark};
  cursor: pointer;
  display: inline-block;
  margin-bottom: 0.5em;
  padding: 0.5em 0.5em 0.25em;
  transition: transform 200ms;

  &:hover {
    transform: scale(1.1);
  }
`;

export default function PointsChoice(props) {
  const { options, onChange, points } = props;

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
