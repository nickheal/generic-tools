import React, { useState } from 'react';
import dbTopics from '../../db/uigov/topics';
import { Button, Form, Input, Label } from '../../elements';

export default function UpdateTopic(props) {
  const { edit, onComplete } = props;

  const [topic, setTopic] = useState();

  return (
    <Form>
      <Label>The topic I'd like to discuss is</Label>
      <Input
        type="text"
        defaultValue={edit && edit.subject}
        onChange={e => setTopic(e.target.value)}
        required
      />
      <Button
        primary
        onClick={() =>
          edit
            ? dbTopics.update(edit.id, topic).then(onComplete)
            : dbTopics.create(topic).then(onComplete)
        }
      >
        Add topic
      </Button>
    </Form>
  );
}
