import React, { useState } from 'react'
import { Image } from '../Image_data'
import "./Tp2.css"
export default function Tp2_react() {
    const [data,setdata]=useState(Image)
    const [counts,setcount]=useState(0)

    const add=()=>{
        if (counts<data.length-1) {
            setcount(counts+ +1)
        }
    }
    
    const sup=()=>{
        if (counts>0) {
            setcount(counts-1)
        }
    }
  return (
    <div>
        <center><h1>Tp2_react</h1></center>
       <center>
       <div className='col-7' style={{margin:"auto"}}>
        <span className='row '>
            <center><h3>{counts}</h3></center>
        <input type="button" className='btn button col-1 b1' onClick={add} value="👈" />
        <img src={data[counts].img} className='image col-5' alt="" />
        <input type="button" className='btn button col-1 b2' onClick={sup} value="👉" />
        </span>
        </div>
       
       </center>
     
    </div>
  )
}
