import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

export default function Popup(props) {
  let loaded = false;
  setTimeout(() => (loaded = true), 0);
  let popupRef = React.createRef();
  function windowClickListener(e) {
    if (loaded && !popupRef.current.contains(e.target)) props.onClose();
  }
  useEffect(() => {
    window.addEventListener('click', windowClickListener);
    return () => {
      window.removeEventListener('click', windowClickListener);
    };
  });

  return <SDiv ref={popupRef}>{props.children}</SDiv>;
}

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-2px, -2px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const SDiv = styled.div`
  animation: ${scaleIn} 300ms;
  background: ${props => props.theme.white};
  border-radius: 4px;
  left: 0;
  position: absolute;
  top: 0;
  z-index: 5;

  &:before {
    animation: ${fadeIn} 300ms;
    border-radius: 4px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;
