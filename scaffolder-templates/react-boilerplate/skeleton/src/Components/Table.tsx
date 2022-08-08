import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, {memo} from 'react';
import ComponentPaper from './ComponentPaper';
interface Props {
  isLoading?: boolean;
  data: Array<any>;
  columns?: Array<{label: string; value: string}>;
}
const defaultColumns = [
  {value: 'name', label: 'name'},
  {value: 'type', label: 'type'},
  {value: 'defaultVal', label: 'default'},
  {value: 'desc', label: 'Description'},
];

const Table: React.FC<Props> = ({data = [], columns = defaultColumns, isLoading}) => {
  if (isLoading) {
    return (
      <Box my={1}>
        <Skeleton height={110} />
        <Skeleton variant="rectangular" height={300} />
      </Box>
    );
  }
  return (
    <TableContainer component={ComponentPaper} sx={{marginTop: 4}}>
      <MuiTable sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow sx={{textTransform: 'capitalize'}}>
            {columns.map(({label, value}, index) => (
              <TableCell key={value} align={index ? 'right' : 'left'}>
                {label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
              {columns.map(({value}, index) => (
                <TableCell key={index} align={index ? 'right' : 'left'}>
                  {row[value]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default memo(Table);
