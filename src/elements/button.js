import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const SButton = styled.button`
  background-color: ${props =>
    props.primary
      ? props.theme.primary
      : props.secondary
      ? props.theme.white
      : 'transparent'};
  border: solid 1px
    ${props =>
      props.primary
        ? props.theme.white
        : props.secondary
        ? props.theme.primary
        : 'transparent'};
  border-radius: 999em;
  color: ${props => (props.primary ? props.theme.white : props.theme.primary)};
  cursor: pointer;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize}rem;
  padding: ${props => (props.tertiary ? '0' : '0.6em 1.2em')};
  position: relative;

  :hover {
    background-color: ${props =>
      props.primary
        ? props.theme.primaryDark
        : props.secondary
        ? props.theme.light
        : 'transparent'};
  }
`;
const ButtonOverlay = styled.div`
  background: rgba(
    ${props => (props.primary ? '0,51,102' : '255,255,255')},
    0.75
  );
  border-radius: 999em;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;
const rotate = keyframes`
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
`;
const SFaSpinner = styled(FaSpinner)`
  position: absolute;
  top: 50%;
  left: 50%;
  animation: ${rotate} 2s linear infinite;
`;

export default function Button(props) {
  const [loading, setLoading] = useState(false);

  function onClick() {
    if (!props.onClick) return;
    setLoading(true);
    Promise.resolve(props.onClick()).then(() => setLoading(false));
  }

  return (
    <SButton {...props} onClick={onClick} disabled={loading}>
      {props.children}
      {loading && (
        <ButtonOverlay primary={props.primary} secondary={props.secondary}>
          <SFaSpinner />
        </ButtonOverlay>
      )}
    </SButton>
  );
}
