import React, { useState, useEffect } from 'react';
import { FaHourglassHalf, FaUserSecret } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';
import users from '../../db/users';
import sessions from '../../db/ap/sessions';
import HalfPageColumn from '../../components/halfPageColumn';
import PointsChoice from '../../components/ap/pointsChoice';
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
const rotate = keyframes`
  0% { transform: rotate(0deg); }
  40% { transform: rotate(180deg); }
  50% { transform: rotate(180deg); }
  90% { transform: rotate(360deg); }
  100% { transform: rotate(360deg); }
`;
const SFaHourglassHalf = styled(FaHourglassHalf)`
  animation: ${rotate} 2s linear infinite;
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
          <PointsChoice
            options={[1, 2, 3, 5, 8, 13, 20, 40, 100]}
            points={doc && doc.members[users.id].points}
            onChange={newPoints => sessions.updatePoints(sessionId, newPoints)}
          />
          <Ul>
            {doc &&
              doc.members &&
              Object.values(doc.members).map((member, index) => (
                <Li key={index} primary>
                  {member.name}
                </Li>
              ))}
          </Ul>
          <Button
            secondary
            onClick={() => sessions.updateClearPoints(sessionId)}
          >
            Clear points
          </Button>
        </SDivLeft>
      </HalfPageColumn>
      <HalfPageColumn primary>
        <SDivRight>
          <Ul>
            {doc &&
              doc.members &&
              Object.values(doc.members).map((member, index) => (
                <Li key={index} secondary>
                  {doc.showPoints ? (
                    member.points
                  ) : member.points ? (
                    <FaUserSecret />
                  ) : (
                    <SFaHourglassHalf />
                  )}
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
