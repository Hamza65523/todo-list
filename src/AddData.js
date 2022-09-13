import './App.css';
import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form } from 'react-bootstrap';
function AddData() {
  let items = [
    {
      id:12,
      brand:'asdf',
      price:123
    },
    {
      id:13,
      brand:'TR',
      price:114
    },
    {
      id:123,
      brand:'FG',
      price:135
    },
  ]
  const [value,setValue] = useState({
    brand:'',
    price:''
  })
  const {brand,price} = value
    let data = {
      id:Math.round(Math.random()*1000),
      price,
      brand
    }

  console.log(asdf)
  const handlerChange=(e)=>{
      setValue({
        ...value,
        [e.target.name]:e.target.value
      })
    }
  
  const handlerSubmit=(e)=>{
    e.preventDefault()
    
    // setStoreVlu(...storeVlu)
  }
  return (
    <div >
      <h1>Todo apps</h1>
      <Form onSubmit={handlerSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Brand</Form.Label>
        <Form.Control name='brand'  onChange={handlerChange} type="text" placeholder="Brand Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control name='price' onChange={handlerChange} type="number" placeholder="Price" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default AddData;
