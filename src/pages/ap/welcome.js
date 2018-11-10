import React from 'react';
import styled from 'styled-components';
import HalfPageColumn from '../../components/halfPageColumn';
import JoinSession from '../../components/ap/joinSession';
import CreateSession from '../../components/ap/createSession';

const SMain = styled.main`
  display: flex;
`;

export default function ApWelcome(props) {
  const { history } = props;

  return (
    <SMain>
      <HalfPageColumn secondary>
        <JoinSession history={history} />
      </HalfPageColumn>
      <HalfPageColumn primary>
        <CreateSession history={history} />
      </HalfPageColumn>
    </SMain>
  );
}
