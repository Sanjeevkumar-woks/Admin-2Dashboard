import React from 'react'
import './user.css'
import {useState} from 'react'
import {Button} from '@mui/material';
import { useHistory} from "react-router-dom";
import TextField from '@mui/material/TextField';

// Function To add User
export function AddUsers( {users,setUser}) {
    const history = useHistory();
    const [id,setId] = useState('');
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [position,setPosition] = useState('');
    const [office,setOffice] = useState('');
    const [salary,setSalary] = useState('');
   
   

    return (
        <div className='adduser'>
             <h2>Add Users</h2>
            <TextField id="standard-basic" label="Id" variant="standard" onChange={(event) => setId(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" label="Name" variant="standard"  onChange={(event) => setName(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" label="Age" variant="standard" onChange={(event) => setAge(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" label="Position" variant="standard"  onChange={(event) => setPosition(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" label="Office" variant="standard"  onChange={(event) => setOffice(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" label="Salary" variant="standard" onChange={(event) => setSalary(event.target.value)}/>
            <br/>
            <Button type="submit" variant="contained"
            onClick={() => {
                // Creating New User
                const newUser = {
                    id,name,position,office,age,salary
                };
                // Adding the new user to the Users List by using Spreed Opration
                setUser([...users, newUser]);
                // Redirecting To Users Display For showing the Added User
                history.push(`/users`);
              }
              }
                >Add User</Button>
        </div>
    )
}


