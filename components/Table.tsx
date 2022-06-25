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
  GridItem
} from '@chakra-ui/react';

const TableComponent = () => {

  return (
    <Grid templateColumns='repeat(8, 1fr)' gap={4} h="1vh" >
      <GridItem colSpan={2}/>
      <GridItem colSpan={5}>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Status</Th>
                <Th>Amount</Th>
                <Th>Oustanding</Th>
                <Th>Monthly payment</Th>
                <Th>APR</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Granted</Td>
                <Td>100 ETH</Td>
                <Td>Do not know what this is</Td>
                <Td>1 ETH</Td>
                <Td>20%</Td>
                <Td>Cancel</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </GridItem>
      <GridItem colSpan={1}/>
    </Grid>

  )
}

export default TableComponent;