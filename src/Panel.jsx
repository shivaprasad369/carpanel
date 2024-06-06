import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Login from './Login';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  }));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
    border: 0,
  },
  }));
  export default function CustomizedTables() {
      const [data,setData]=React.useState()
     const [login,setLogin]= React.useState(true)
      const [load,setLoad]=React.useState(false)
        React.useEffect(()=>
           async()=>{
            setLoad(true)
               const d=   await axios.get('https://carsbackend-3oe0.onrender.com/api/v1/post')
               setData(d.data.data)
             console.log(d)
               setLoad(false)
               },[]
               )
           return (
            <>
            <Login login={login} setLogin={setLogin}/>
    {!load && !login &&
    <TableContainer component={Paper} className='px-[3%]'>
        <h1 className='text-[25px] font-bold text-orange-400 text-center uppercase py-[2rem]'>Customer Information</h1>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">PickUp</StyledTableCell>
            <StyledTableCell align="right">PickUpAt</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">ReturnAt</StyledTableCell>
            <StyledTableCell align="right">From</StyledTableCell>
            <StyledTableCell align="right">To</StyledTableCell>
            <StyledTableCell align="right">Car Name</StyledTableCell>
            <StyledTableCell align="right">Call</StyledTableCell>

            <StyledTableCell align="right">WhatsApp</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.length>0 && data?.map((row) => 
            <StyledTableRow key={row.Name}>
              <StyledTableCell component="th" scope="row">
                {row.Name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Email}</StyledTableCell>
              <StyledTableCell align="right">{row.Phone}</StyledTableCell>
              <StyledTableCell align="right">{row.PickUp}</StyledTableCell>
              <StyledTableCell align="right">{row.PickUpAt}</StyledTableCell>
              <StyledTableCell align="right">{row.Type}</StyledTableCell>
              <StyledTableCell align="right">{row.ReturnAt}</StyledTableCell>
              <StyledTableCell align="right">{row.From}</StyledTableCell>
              <StyledTableCell align="right">{row.To}</StyledTableCell>
              <StyledTableCell align="right">{row.Car}</StyledTableCell>
              <StyledTableCell align="right"><a href={`tel:${row.Phone}`} className='text-white font-bold bg-blue-500 px-3 py-2'>CallNow</a> </StyledTableCell>
            
              <StyledTableCell align="right"><a href={`https://wa.me/${row.Phone}`} className='text-white font-bold bg-green-500 px-3 py-2'>WhatsApp</a></StyledTableCell></StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  } 
    </>
  );
}
