import React from 'react'
import  './user.css'
import TableCell from '@mui/material/TableCell';


// Users Dispay Component Foe showcassing each User
export function User({editButton,deletButton,key,id,name,position,office,age,salary}) {
    return (
        <div> 
      <TableCell sx={{width:100}}>{id}</TableCell>
      <TableCell sx={{width:100}} >{name}</TableCell>
      <TableCell sx={{width:100}}>{age}</TableCell>
      <TableCell sx={{width:100}}>{position}</TableCell>
      <TableCell sx={{width:100}}>{office}</TableCell>
      <TableCell sx={{width:100}}>{salary}</TableCell>
      <TableCell sx={{width:100}}>{deletButton}</TableCell>
      <TableCell sx={{width:100}}>{editButton}</TableCell>
 </div>
    )
}


