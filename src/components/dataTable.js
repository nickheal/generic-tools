import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEllipsisH } from 'react-icons/fa';
import Popup from './popup';
import { Button, Table, Tbody, Td, Th, Thead, Tr } from '../elements';

export default function DataTable(props) {
  const { columns, data } = props;

  const [popupOpen, setPopupOpen] = useState(false);

  function renderCell(id, row, column) {
    if (column.actions) {
      return (
        <React.Fragment>
          <Button
            tertiary
            onClick={() => setPopupOpen(popupOpen === id ? false : id)}
          >
            <FaEllipsisH />
          </Button>
          {popupOpen === id && (
            <Popup onClose={() => setPopupOpen(false)}>
              <SButton>Edit</SButton>
              <SButton>Delete</SButton>
            </Popup>
          )}
        </React.Fragment>
      );
    }

    if (column.format) {
      return column.format(row[column.field]);
    }

    return row[column.field];
  }

  return (
    <Table>
      <Thead>
        <Tr>
          {columns.map((column, index) => (
            <Th key={index}>{column.title}</Th>
          ))}
        </Tr>
      </Thead>
      {data && (
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              {columns.map((column, cellIndex) => (
                <Td key={column.field || cellIndex}>
                  {renderCell(index, row, column)}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      )}
    </Table>
  );
}

const SButton = styled(Button)`
  display: block;
`;
