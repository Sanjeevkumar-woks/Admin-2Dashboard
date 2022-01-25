import React from 'react'
import {User} from './User'
import './user.css'
import {Button} from '@mui/material';
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


// Maping Each User In the Users List to display each User 
export function UserList( {users,setUser}) {

    const history = useHistory();
    return (
        <div className='users'>
            <h1>All Users</h1>
         <TableContainer component={Paper} sx={{ height: 400, width:950  }}>
            <Table sx={{ height: "max-content"}} className="table" cellSpacing="5"   aria-label="simple table">
            <TableRow >      
    <TableHead >
      <TableCell sx={{width:80}}>Id</TableCell>
      <TableCell sx={{width:80}}>Name</TableCell>
      <TableCell sx={{width:80}}>Age</TableCell>
      <TableCell sx={{width:80}}>Position</TableCell>
      <TableCell sx={{width:80}}>Office</TableCell>
      <TableCell sx={{width:80}}>Salary</TableCell>
      <TableCell sx={{width:90}}>Delete</TableCell>
      <TableCell sx={{width:90}}>Edit</TableCell> 
  </TableHead>
  </TableRow>
  <TableBody>
  <TableRow>
  {
                users.map(({id,name,position,office,age,salary},index)=>(
                    <User 
                    // Delete Button To delete a perticular user By finding its INdex
                    deletButton={
                        <Button sx={{marginRight:6}}
                        onClick={()=>{
                            const deleteIndex=index;
                            const remainingUsers=users.filter((mv,idx)=>deleteIndex!== idx);
                            setUser(remainingUsers);}}><DeleteForeverOutlinedIcon/></Button>
                    }
                    // Redirecting To Edit users To the edit users Route With that Perticular Id
                    editButton={<Button sx={{marginRight:6}}
                        onClick={()=>{history.push(`/edituser/${id}`)}}>
                    
                        <EditIcon/></Button>}
                   key={index} id={id} name={name} position={position} office={office} age={age} salary={salary}/>
                ))
            }
    </TableRow>
  </TableBody>
  </Table>
  </TableContainer>
        </div>
    )
}


