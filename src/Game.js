import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {Card,ListGroup } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Game() {
  let data = [
    {
      product:'apple',
      price:200
    },
    {
      product:'banana',
      price:2123
    },
    {
      product:'mabnfgu',
      price:3123
    },
    {
      product:'apple',
      price:123
    },
  ]
  const [todos,setTodos] = useState(data)
  const [Value,setValue]= useState({
    product:'',
    price:''
  })
  const handlerChange=(e)=>{
    setValue({
      ...Value,
      [e.target.name]:e.target.value
    })
  }
  const HandlerSubmit=(e)=>{
    e.preventDefault()
    const {product,price} = Value
    if(product === '' || price === ''){
      alert('plz filed th eform')
    }else{

      setTodos([...todos,
        Value])
    }
    console.log(Value)
  }
  const DeleteHandler=(e)=>{
    setTodos(todos.filter((data,index)=>(
      e !== index
    )))
  }
  return (
    <div className="">
      <Form className='w-75 mx-auto my-0 mt-4' onSubmit={HandlerSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Products</Form.Label>
        <Form.Control name='product' onChange={handlerChange} type="text" placeholder="Products Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control name='price' onChange={handlerChange} type="number" placeholder="Price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <div className="w-75 mx-auto my-0 mt-4">
    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush" style={{display:'flex',justifyContent:'space-between !important'}}>
       {todos.map((items,index)=>(
        <ListGroup.Item key={index}>{items.product}: {items.price}<Button variant='danger' onClick={()=>DeleteHandler(index)}>Delete</Button></ListGroup.Item>
       ))}
      </ListGroup>
    </Card>
    </div>
    </div>
  );
}

export default Game;