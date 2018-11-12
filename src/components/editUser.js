import React from 'react';
import user from '../db/users';
import { Input, Label } from '../elements';

export default function EditUser() {
  return (
    <div>
      <Label htmlFor="name">My name is</Label>
      <Input
        id="name"
        type="test"
        // value={user.name}
        onChange={e => user.updateName(e.target.value)}
      />
    </div>
  );
}
