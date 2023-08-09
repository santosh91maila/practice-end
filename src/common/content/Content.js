import React from 'react'
import {useState} from 'react'
import { Santosh } from '../main/santosh/Santosh'
import './Content.css'

export const Content = () => {
  const [input,setInput] = useState(1)
  const fnChange=(e)=>{
    setInput(e.target.value)
   
  }
  const fnClick=()=>{
    let nav =document.querySelector('.div2');
  nav.style.setProperty('--width',`${input}%`)
  }
  
    
  return (
    <div id='content'>
      <Santosh/>
      <div id='anusharoute'>
        <a href='/Anusha'>Anusha Restaurants</a>
      </div>
      <br/>
      <input type='text' onChange={fnChange}/><button onClick={fnClick}>submit</button>
      <div className='div1'>
        <div className='div2'></div>
      </div>
      
    </div>
  )
}
