import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import{Topbar} from './components/topbar/Topbar'
import{Sidebar} from './components/sidebar/Sidebar'
import {useState} from 'react'
import{Home} from './components/Home/Home'
import {UserList} from './components/users/UserList'
import {AddUsers} from './components/users/AddUsers'
import { ProductsList } from './components/Products/ProductsList.';
import{AddProducts} from './components/Products/AddProducts.'
import { EditUser } from './components/users/EditUser';
import { EditProduct } from './components/Products/EditProducts';



function App() {
    // Users List
  const [users,setUser]= useState(
    [
        {   id:100,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:101,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:102,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:103,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:104,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:105,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:106,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:107,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:108,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:109,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:110,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:111,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:112,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:113,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:114,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:115,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:116,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:117,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:118,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        }
    ]
);
 // Products List
const [products,setProducts]= useState([
{
    name:"Iphone",
    code:"IP456",
    price:25000,
    quantity:450,
},{
    name:"Samsung G",
    code:"S346U",
    price:25000,
    quantity:450,
},{
    name:"MI 7",
    code:"Mi0007",
    price:25000,
    quantity:450,
},{
    name:"MI 10",
    code:"Mi0010",
    price:25000,
    quantity:450,
},{
    name:"Samsung G-7",
    code:"SG123U",
    price:25000,
    quantity:450,
},{
    name:"Samsung M",
    code:"SM2357U",
    price:25000,
    quantity:450,
},{
    name:"Nokia 8",
    code:"Nk938U",
    price:25000,
    quantity:450,
}
]);
 

  return (
   // Rousts For Ech Component
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
           <Route exact path="/">
            <Home /> 
          </Route>
          <Route path="/users">
             <UserList users={users} setUser={setUser}/> 
          </Route>
          <Route path="/add/user">
            <AddUsers users={users} setUser={setUser}/>
          </Route>
           <Route path="/edituser/:id">
            <EditUser users={users} setUser={setUser} />
          </Route>
          <Route path="/products">
            <ProductsList products={products} setProducts={setProducts}/>
          </Route>
          <Route path="/addproduct">
            <AddProducts products={products} setProducts={setProducts}/>
          </Route> 
           <Route path="/editproduct/:code">
            <EditProduct products={products} setProducts={setProducts}/>
          </Route>      
        </Switch>
        </div>
    </Router>
   
  );
}

export default App;

