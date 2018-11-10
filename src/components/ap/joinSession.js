import React, { useState } from 'react';
import sessions from '../../db/ap/sessions';
import { Button, Fieldset, Form, Input, Label } from '../../elements';

export default function JoinSession(props) {
  const { history } = props;

  const [sessionId, setSessionId] = useState();

  return (
    <Form>
      <Fieldset>
        <Label htmlFor="session-id">Session ID</Label>
        <Input id="session-id" onChange={e => setSessionId(e.target.value)} />
      </Fieldset>
      <Button
        secondary
        type="button"
        onClick={() =>
          sessions
            .addMember(sessionId)
            .then(() => history.push(`/ap/session/${sessionId}`))
        }
      >
        I want to join a session
      </Button>
    </Form>
  );
}
