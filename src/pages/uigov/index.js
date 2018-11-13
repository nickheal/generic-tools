import React from 'react';
import styled from 'styled-components';
import format from '../../utils/format';
import EditUser from '../../components/editUser';
import UpdateTopic from '../../components/uigov/updateTopic';
import DataTable from '../../components/dataTable';
import { H1, Header } from '../../elements';

export default function Home() {
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
                field: 'creationDate',
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
                    action: () => console.log('Delete')
                  }
                ]
              }
            ]}
            data={[
              {
                subject: 'A thing',
                raisedBy: 'Nick',
                creationDate: 1542057287465
              },
              {
                subject: 'A second thing',
                raisedBy: 'Also Nick',
                creationDate: 1542057285465
              }
            ]}
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
