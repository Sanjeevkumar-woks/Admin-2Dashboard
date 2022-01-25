import React from 'react'
import './Products.css'
import {useState} from 'react'
import {Button} from '@mui/material';
import { useHistory,useParams} from "react-router-dom";
import TextField from '@mui/material/TextField';


export function EditProduct( {products,setProducts}) {
    const history = useHistory();
    let {code} = useParams(); // Geting Code of the Product As Prameter From The URL
    //Finding the Product with The given Code  using Array.find()
    const product=products.find(product=>product.code===code);
    console.log(product);

    const [name,setName] = useState(product.name);
    const [quantity,setQuantity] = useState(product.quantity);
    const [price,setPrice] = useState(product.price);
   
   

    return (
        <div className='editproducts'>
             <h2>Edit Product</h2>
            <TextField id="standard-basic" value={name} label="Name" variant="standard"  onChange={(event) => setName(event.target.value)}/>
            <br/><br/>
            <TextField id="standard-basic" value={price} label="Price" variant="standard"  onChange={(event) => setPrice(event.target.value)}/>
            <br/><br/>
            <TextField id="standard-basic" value={quantity} label="quantity" variant="standard"  onChange={(event) => setQuantity(event.target.value)}/>
            <br/><br/><br/><br/><br/><br/>
            <Button type="submit" variant="contained" 
            onClick={() => {
                const newProduct= { ...product,
                    name,price,quantity
                };
                const ind=products.indexOf(product);
                products[ind]=newProduct;
                // Updating the Product List with newProduct 
               setProducts(products);
               //Redirecting to Products to show the Added Product
                history.push(`/Products`);
              }
              }
                >Save</Button>
        </div>
    )
}


