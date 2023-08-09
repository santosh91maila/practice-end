import React from 'react'
import './Anusha.css'
import { useState,useEffect } from 'react'

export const Anusha = () => {
  const [show,setShow] = useState(false)
//   try{
//   const nav =document.querySelector('#rests > div');
//   nav.addEventListener('click',(e)=>{
//     const button = e.target.closest('button');
//     if(!button) return; 
//     const calcLeft = button.offsetLeft;
//     nav.style.setProperty('--left', calcLeft + 'px');
//     const calcWidth = button.offsetWidth/nav.offsetWidth;
//     nav.style.setProperty('--width', calcWidth );
//   })
// }catch(e){console.log(e);}
  

  
  const fnClick = (e) =>{
    const nav=document.querySelector('.pimag');
    const button= e.target.closest('button');
    if(!button)return;
    const calcLeft=button.offsetLeft;
    nav.style.setProperty('--left',calcLeft + 'px') ;
    const calcWidth=button.offsetWidth/nav.offsetWidth ;
    nav.style.setProperty('--width',calcWidth) ;
  }
  
  
  return (
    <div id='rests'>
        <h1>Anusha Restaurants </h1>
        <div className='pimag' onClick={fnClick}>
          
          <button className='ppimg'  >
              <img src='/h1.jpg' alt='Chinese' />
              <span>Chinese</span>
          </button>
          
          <button className='ppimg' >
            <img src='/h2.jpg' alt='indian'/>
            <span>Indian</span>
          </button>
          
          <button className='ppimg'>
            <img src='/h3.jpg' alt='hongkong'/>
            <span>Hongkong</span>
          </button>
          
          <button className='ppimg'>
            <img src='/h4.jpg' alt='japan'/>
            <span>Japanese</span>
          </button>
          
        </div>
    </div>
  )
}
