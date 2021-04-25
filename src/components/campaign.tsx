import React, { useState } from 'react';
import styled from 'styled-components';



export const Campaign = () => {
    const [firstNumber,setFirstNumber]= useState('');
    const [secondNumber,setSecondNumber]= useState('');


    const firstChange = e => {
      setFirstNumber(e.target.value);
    }
    const secondChange = e =>{
      setSecondNumber(e.target.value);
    }
    const total = (firstNumber, secondNumber) => {
      return firstNumber * secondNumber;
    };


    const [count, setCount] = useState();




  return (
    <>
    <Wrapp>
      <input value={firstNumber} onChange={firstChange} />✖️
      <input value={secondNumber} onChange={secondChange} />=
      {<p>0</p> && total(firstNumber,secondNumber) } 
    </Wrapp>



    {/* <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount("yoshiaki")}>
        Click me
      </button>
    </div> */}

    </>
  );
};


      {/* <input type="text" value={a} onChange={
        (event: React.ChangeEvent<HTMLInputElement>) => {
        const farstvalue:number = Number(event.target.value);
      } }/> 
      <input type="text" value={b} onChange={
        (event: React.ChangeEvent<HTMLInputElement>) => {
        const secoundValue:number = Number(event.target.value);
      }} /> */}
      {/* <button onClick={}>タス</button> */}


const Wrapp = styled.div`
  text-align: center;
  font-size:20px;
  input{
    display:block;
    margin:20px auto;
  }
`;

