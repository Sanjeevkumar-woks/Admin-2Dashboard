import React from 'react'
import './Products.css' 
import {useState} from 'react'
import {Button} from '@mui/material';
import { useHistory} from "react-router-dom";
import TextField from '@mui/material/TextField';

// Function to ADD Products 

export function AddProducts( {products,setProducts}) {
    const history = useHistory();
    const [name,setName] = useState('');
    const [code,setCode] = useState('');
    const [quantity,setQuantity] = useState('');
    const [price,setPrice] = useState('');
   
   

    return (
        <div className='addproducts'>
             <h2>Add Product</h2>
            <TextField id="standard-basic" label="Name" variant="standard"  onChange={(event) => setName(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" label="Code" variant="standard" onChange={(event) => setCode(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" label="Price" variant="standard"  onChange={(event) => setPrice(event.target.value)}/>
            <br/>
            <TextField id="standard-basic" label="quantity" variant="standard"  onChange={(event) => setQuantity(event.target.value)}/>
            <br/><br/><br/><br/>
            <Button type="submit" variant="contained" className='button'
            onClick={() => {
                const newProducts= {
                    name,code,price,quantity
                };
                //setting Products with modified Data
                setProducts([...products, newProducts]);
                
                // Redirecting to Products page to see the modified data
                history.push(`/Products`);
              }
              }
                >Add-Product</Button>
        </div>
    )
}


