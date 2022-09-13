import './App.css';
import React,{useState} from 'react'
// import Cards from './Cards';
// import AddData from './AddData';
import Game from './Game';

function App() {
 const [value,setValue]=useState()
  const addHandler=(data)=>{
    // console.log(data)
    setValue(data)
  }

  return (
    <div className="">
       {/* <AddData addtodo={addHandler}/> */}
        {/* <Cards /> */}
        <Game/>
    </div>
  );
}

export default App;
