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

      &::before {
        transform: translateX(0px);
      }

      &::after {
        transform: translateX(0px);
      }

      &::before,
      &::after {
        opacity: 0.5;
      }
    }
  }
`;
const SLabel = styled.label`
  color: ${props => props.theme.white};
  cursor: pointer;
  display: inline-block;
  font-size: ${props => props.theme.fontSize * 1.5}rem;
  margin: 0.5em 0;
  padding: 0.5em;
  transition: transform 200ms;

  &::before,
  &::after {
    border: solid 1px ${props => props.theme.white};
    content: '';
    display: block;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: transform 300ms, opacity 300ms;
    width: 10px;
    z-index: -1;
  }

  &::before {
    border-bottom-left-radius: 999em;
    border-right: 0;
    border-top-left-radius: 999em;
    left: 10%;
    transform: translateX(-8px);
  }

  &::after {
    border-bottom-right-radius: 999em;
    border-left: 0;
    border-top-right-radius: 999em;
    right: 10%;
    transform: translateX(8px);
  }

  &:hover {
    transform: scale(1.2);

    &::before {
      transform: translateX(-4px);
    }

    &::after {
      transform: translateX(4px);
    }

    &::before,
    &::after {
      opacity: 0.5;
    }
  }
`;
