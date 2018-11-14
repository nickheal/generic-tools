import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import dbTopics from '../../db/uigov/topics';
import format from '../../utils/format';
import EditUser from '../../components/editUser';
import UpdateTopic from '../../components/uigov/updateTopic';
import DataTable from '../../components/dataTable';
import { H1, Header } from '../../elements';

export default function Home(props) {
  const [topics, setTopics] = useState([]);

  useEffect(
    () => {
      return dbTopics.subscribe(querySnapshot => {
        setTopics(
          querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        );
      });
    },
    [props.match]
  );

  return (
    <React.Fragment>
      <Header>
        <H1 light>UI governance subjects</H1>
      </Header>
      <SMain>
        <Wrapper>
          <EditUser />
        </Wrapper>
        <Wrapper>
          <UpdateTopic />
        </Wrapper>
        <Wrapper>
          <DataTable
            columns={[
              {
                title: 'Subject',
                field: 'subject'
              },
              {
                title: 'Raised by',
                field: 'raisedBy'
              },
              {
                title: 'Creation date',
                field: 'date',
                format: value => format.date(value)
              },
              {
                title: 'Actions',
                actions: [
                  {
                    title: 'Edit',
                    action: () => console.log('Edit')
                  },
                  {
                    title: 'Delete',
                    action: row => dbTopics.delete(row.id)
                  }
                ]
              }
            ]}
            data={topics}
          />
        </Wrapper>
      </SMain>
    </React.Fragment>
  );
}

const SMain = styled.main`
  padding: 4em 6.4em 2.5em;
`;
const Wrapper = styled.section`
  margin-bottom: 2.5em;
`;
