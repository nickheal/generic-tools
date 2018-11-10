import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sessions from '../../db/ap/sessions';
import HalfPageColumn from '../../components/halfPageColumn';
import { Button, Ul, Li } from '../../elements';

const SMain = styled.main`
  display: flex;
`;
const SDiv = styled.div`
  width: 100%;
`;
const SDivLeft = styled(SDiv)`
  padding-right: 1em;
  text-align: right;
`;
const SDivRight = styled(SDiv)`
  padding-left: 1em;
  text-align: left;
`;

export default function ApSession(props) {
  const {
    match: {
      params: { sessionId }
    }
  } = props;

  const [doc, setDoc] = useState();

  useEffect(
    () => {
      return sessions.subscribe(sessionId, data => setDoc(data));
    },
    [sessionId]
  );

  return (
    <SMain>
      <HalfPageColumn secondary>
        <SDivLeft>
          <Ul>
            {doc &&
              doc.members &&
              Object.values(doc.members).map((member, index) => (
                <Li key={index} primary>
                  {member.name}
                </Li>
              ))}
          </Ul>
          <Button secondary>Clear points</Button>
        </SDivLeft>
      </HalfPageColumn>
      <HalfPageColumn primary>
        <SDivRight>
          <Ul>
            {doc &&
              doc.members &&
              Object.values(doc.members).map((member, index) => (
                <Li key={index} secondary>
                  {doc.showPoints ? member.points : member.points ? '—' : ''}
                </Li>
              ))}
          </Ul>
          <Button
            primary
            onClick={() =>
              sessions.updateShowPoints(sessionId, !doc.showPoints)
            }
          >
            {doc && doc.showPoints ? 'Hide points' : 'Show points'}
          </Button>
        </SDivRight>
      </HalfPageColumn>
    </SMain>
  );
}
