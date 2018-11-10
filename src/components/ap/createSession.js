import React from 'react';
import sessions from '../../db/ap/sessions';
import { Button, Form } from '../../elements';

export default function CreateSession(props) {
  const { history } = props;

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        sessions
          .create()
          .then(session => history.push(`/ap/session/${session.id}`));
      }}
    >
      <Button primary>I want to start a new session</Button>
    </Form>
  );
}
