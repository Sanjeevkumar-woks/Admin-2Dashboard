import './sidebar.css'
import { useHistory} from "react-router-dom";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddIcon from '@mui/icons-material/Add';
import {Button} from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';

//Side Navigation Bar Funstion

export function Sidebar() {
    const history = useHistory();
    return (
        <div className='nav'>  
        <hr/>
        <div className='dashboard'>
         <Button variant="contained" onClick={()=>history.push(`/`)}  color="warning"><sub><SpeedIcon/></sub>Dashboard</Button>
         </div>
         <hr/>
        <div className='users'>
        <h4>Usres Interface</h4>
        <Button variant="contained" color="secondary" onClick={()=>history.push(`/users`)} ><AssignmentIndIcon/>Users</Button>
        <Button variant="contained" color="secondary" onClick={()=>history.push(`/add/user`)}><AddIcon/>User</Button>
        </div> 
        <div className='Products'>
        <h4>Products Interface</h4>
        <Button variant="contained" color="secondary" onClick={()=>history.push(`/products`)}><ShoppingCartOutlinedIcon/>Products</Button>
        <Button variant="contained" color="secondary"  onClick={()=>history.push(`/addproduct`)}><AddIcon/>Product</Button>
        </div>
        </div>
    )
}
