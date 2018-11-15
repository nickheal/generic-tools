import React from 'react';
import { Link, P } from '../elements';

export default function Dashboard() {
  return (
    <>
      <P>
        Did you want to go to <Link to="./ap">agile poker?</Link>
      </P>
    </>
  );
}
