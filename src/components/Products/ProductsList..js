import React from 'react'
import {Button} from '@mui/material';
import { Products } from './Products';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditIcon from '@mui/icons-material/Edit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useHistory} from "react-router-dom";

//Maping Product List To call Proucts Display For each product


export function ProductsList( {products,setProducts}) {

    const history = useHistory();
    return (
        <div className='users'>
            <h1>All Products</h1>
         <TableContainer component={Paper} sx={{ height: 400, width:950  }}>
            <Table sx={{ height: "max-content"}} className="table" cellspacing="5"   aria-label="simple table">
            <TableRow >      
    <TableHead >
      <TableCell sx={{width:100}}>Product</TableCell>
      <TableCell sx={{width:100}}>P-Code</TableCell>
      <TableCell sx={{width:100}}>Price</TableCell>
      <TableCell sx={{width:100}}>Quantity</TableCell>
      <TableCell sx={{width:120}}>Delete</TableCell>
      <TableCell sx={{width:100}}>Edit</TableCell> 
  </TableHead>
  </TableRow>
  <TableBody>
  <TableRow>
  {
                products.map(({name,code,quantity,price},index)=>(
                    <Products
                    deletButton={
                        <Button sx={{marginRight:6}}
                        onClick={()=>{
                            const deleteIndex=index;
                            const remainingUsers=products.filter((mv,idx)=>deleteIndex!== idx);
                            setProducts(remainingUsers);}}><DeleteForeverOutlinedIcon/></Button>
                    }
                    editButton={<Button sx={{marginRight:6}}
                    onClick={()=>{history.push(`/editproduct/${code}`)}}>
                
                    <EditIcon/></Button>}
               key={index} name={name} code={code} price={price} quantity={quantity} />
                ))
            }
    </TableRow>
  </TableBody>
  </Table>
  </TableContainer>
        </div>
    )
}
