import React from 'react'
import  './Products.css'
import TableCell from '@mui/material/TableCell';


// Function To display Each Product 
export function Products({editButton,deletButton,name,code,quantity,price}) {
    return (
        <div> 
      <TableCell sx={{width:100}}>{name}</TableCell>
      <TableCell sx={{width:100}} >{code}</TableCell>
      <TableCell sx={{width:100}}>{quantity}</TableCell>
      <TableCell sx={{width:100}}>{price}</TableCell>
      <TableCell sx={{width:100}}>{deletButton}</TableCell>
      <TableCell sx={{width:100}}>{editButton}</TableCell>
 </div>
    )
}


