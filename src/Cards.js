import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import React,{useContext, useState} from 'react';
const  Cards=()=>{

  let data = [
    {
      id:2,
      Brand:'realme',
      price:'4000'
    },
    {
      id:2,
      Brand:'vivo',
      price:'4000'
    },
    {
      id:2,
      Brand:'sdf',
      price:'4000'
    },
    {
      id:2,
      Brand:'iphone',
      price:'4000'
    },
    {
      id:12,
      Brand:'samsung',
      price:'4000'
    },
  ]
  const [value,setValue]=useState(data)
  const deleteHandler=(e)=>{
    setValue(value.filter((l,index)=>{
      return index !== e
    }))
  }
  let items = [
    {
      id:1,
      brand:'asdf',
      price:123
    },
    {
      id:2,
      brand:'TR',
      price:114
    },
    {
      id:3,
      brand:'FG',
      price:135
    },
  ]
  const [value1,setValue1] = useState({
    brand:'',
    price:''
  })
  const {brand,price} = value1
  let data1 = {
    id:Math.round(Math.random()*1000),
    price,
    brand
  }
  const handlerChange=(e)=>{
      setValue1({...value1,
        [e.target.name]:e.target.value
      })
    }
  
  const handlerSubmit=(e)=>{
    e.preventDefault()
    setValue([...value,data1])
    // setStoreVlu(...storeVlu)
  }
  return (
   <div className="">
    <div className="" style={{display:'flex',gap:'2rem'}}>
     {value.map((items,index)=>(
        <Card key={index} style={{ width: '18rem',marginTop:'2rem'}}>
      <Card.Body>
        <Card.Title>{items.brand}</Card.Title>
        <Card.Text>
        {items.price}
        </Card.Text>
        <Button variant="danger" onClick={()=>deleteHandler(index)}>Delete</Button>
      </Card.Body>
    </Card>
      ))}
   </div>
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
   </div>

  );
}

export default Cards;