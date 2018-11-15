import React, { useState } from 'react';
import dbTopics from '../../db/uigov/topics';
import { Button, Form, Input, Label } from '../../elements';

export default function UpdateTopic() {
  const [topic, setTopic] = useState();

  return (
    <Form>
      <Label>The topic I'd like to discuss is</Label>
      <Input type="text" onChange={e => setTopic(e.target.value)} required />
      <Button primary onClick={() => dbTopics.create(topic)}>
        Add topic
      </Button>
    </Form>
  );
}
