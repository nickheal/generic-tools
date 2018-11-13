import React, { useState } from 'react';
import { Button, Form, Input, Label } from '../../elements';

export default function UpdateTopic() {
  const [topic, setTopic] = useState();

  return (
    <Form>
      <Label>The topic I'd like to discuss is</Label>
      <Input type="text" onChange={e => setTopic(e.target.value)} />
      <Button primary>Add topic</Button>
    </Form>
  );
}
