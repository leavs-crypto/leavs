import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Grid,
  GridItem,
  Button
} from '@chakra-ui/react';
import { useState, useContext, useLayoutEffect } from "react";
import ButtonTable from './ButtonTable';

const TableComponent = (props: object) => {

  return (
    <Grid templateColumns='repeat(12, 1fr)' gap={4} h="1vh" >
      <GridItem colSpan={1} />
      <GridItem colSpan={10}>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Credit score</Th>
                <Th>Geographic location</Th>
                <Th>Age</Th>
                <Th>Amount</Th>
                <Th>Oustanding</Th>
                <Th>Daily payment</Th>
                <Th>APR</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {props.data.map((item) =>
                <Tr key={item.amount}>
                  <Td>{item.KYC.creditScore}</Td>
                  <Td>{item.KYC.geographicLocation}</Td>
                  <Td>{item.KYC.AgeGroup}</Td>
                  <Td>{item.amount}</Td>
                  <Td>{item.oustanding}</Td>
                  <Td>{item.dailyPayment}</Td>
                  <Td>{item.APR}</Td>
                  <Td>
                    <ButtonTable action={item.action} />
                  </Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </GridItem>
      <GridItem colSpan={1} />
    </Grid>

  )
}

export default TableComponent;