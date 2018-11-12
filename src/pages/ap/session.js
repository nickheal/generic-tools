import React, { useState, useEffect } from 'react';
import { FaHourglassHalf, FaUserSecret } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';
import users from '../../db/users';
import sessions from '../../db/ap/sessions';
import HalfPageColumn from '../../components/halfPageColumn';
import EditUser from '../../components/editUser';
import PointsChoice from '../../components/ap/pointsChoice';
import { Button, Ul, Li } from '../../elements';

export default function ApSession(props) {
  const {
    match: {
      params: { sessionId }
    }
  } = props;

  const [doc, setDoc] = useState();

  useEffect(
    () => {
      sessions.addMember(sessionId);
    },
    [sessionId]
  );

  useEffect(
    () => {
      return sessions.subscribe(sessionId, data => setDoc(data));
    },
    [sessionId]
  );

  return (
    <SMain>
      <HalfPageColumn background secondary />
      <HalfPageColumn background primary />

      <Wrapper>
        <HalfPageColumn foreground>
          <SDivLeft>
            <EditUser />
          </SDivLeft>
        </HalfPageColumn>
        <HalfPageColumn foreground>
          <SDivRight>
            <PointsChoice
              options={[1, 2, 3, 5, 8, 13, 20, 40, 100]}
              points={
                doc &&
                doc.members &&
                doc.members[users.id] &&
                doc.members[users.id].points
              }
              onChange={newPoints =>
                sessions.updatePoints(sessionId, newPoints)
              }
            />
          </SDivRight>
        </HalfPageColumn>
      </Wrapper>

      <Wrapper>
        <Ul>
          {doc &&
            doc.members &&
            Object.values(doc.members).map((member, index) => (
              <Li key={index} primary>
                <Wrapper noPadding>
                  <HalfPageColumn foreground>
                    <SDivLeft>{member.name}</SDivLeft>
                  </HalfPageColumn>
                  <HalfPageColumn foreground>
                    <SDivRight>
                      {doc.showPoints ? (
                        member.points || '—'
                      ) : member.points ? (
                        <FaUserSecret />
                      ) : (
                        <SFaHourglassHalf />
                      )}
                    </SDivRight>
                  </HalfPageColumn>
                </Wrapper>
              </Li>
            ))}
        </Ul>
      </Wrapper>

      <Wrapper>
        <HalfPageColumn foreground>
          <SDivLeft>
            <Button
              secondary
              onClick={() => sessions.updateClearPoints(sessionId)}
            >
              Clear points
            </Button>
          </SDivLeft>
        </HalfPageColumn>
        <HalfPageColumn foreground>
          <SDivRight>
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
      </Wrapper>
    </SMain>
  );
}

const SMain = styled.main``;
const SDiv = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  padding: ${props => (props.noPadding ? '0' : '5em 0')};
`;
const SDivLeft = styled(SDiv)`
  padding-right: 1em;
  text-align: right;
`;
const SDivRight = styled(SDiv)`
  color: ${props => props.theme.white};
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
