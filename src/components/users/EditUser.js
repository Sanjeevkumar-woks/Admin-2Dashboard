import React from 'react'
import './user.css'
import {useState} from 'react'
import {Button} from '@mui/material';
import { useHistory,useParams} from "react-router-dom";
import TextField from '@mui/material/TextField';

// Funcstion To Edit the Detiails of an existing Userby Id
export function EditUser( {users,setUser}) {
 
    const history = useHistory();
    let {id} = useParams(); 
    // Getting the Users Id as an Parameter from the URL
    const user=users.find(user=>user.id===+id);
    // Finding the user with the Given Id 
    const [name,setName] = useState(user.name);
    // setting the users existing details as initial detealis in Form fields
    const [age,setAge] = useState(user.age);
    const [position,setPosition] = useState(user.position);
    const [office,setOffice] = useState(user.office);
    const [salary,setSalary] = useState(user.salary);
   
    return (
        <div className='adduser'>
             <h2>Edit Users</h2>
            <br/>
            <TextField id="standard-basic" value={name} label="Name" variant="standard"  onChange={(event) => setName(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" value={age} label="Age" variant="standard" onChange={(event) => setAge(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" value={position} label="Position" variant="standard"  onChange={(event) => setPosition(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" value={office} label="Office" variant="standard"  onChange={(event) => setOffice(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" value={salary} label="Salary" variant="standard" onChange={(event) => setSalary(event.target.value)}/>
            <br/>
            <Button type="submit" variant="contained"
            onClick={() => {
                // Updating the users only with the changes made keeping rest of the data unchanged
                const newUser = {...user,
                    name,position,office,age,salary
                };
                // Finding the users Index
               const ind=users.indexOf(user);
               users[ind]=newUser;
               // Updating the data to the perticular User
               setUser(users);
               // Rediectin to the users Display to show case the Updated Data
                history.push(`/users`);
              }
              }
                >Save</Button>
        </div>
    )
}


