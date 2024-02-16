import React, { useState } from 'react'
import people from './Data.jsx'
import './App.css'


function Review() {
const [readMOre, setreadMOre] = useState(false)
const [index,setIndex]=useState(0);
const {id,name,job,image,text}=people[index];


const hasPrev= index > 0;
const hasnext= index < people.length-1



function NextIndex(){
    if(hasnext){
       setIndex(index+1)
    }else{
       setIndex(0)
    }

}

function PrevIndex(){
    if(hasPrev){
        setIndex((index - 1))
    }else{
        setIndex(index)
    }
}


 function MathRandom(){
  setIndex((index+1) % people.length)   
 }




  return (
    <div className='inner-part'>
      <div className='img'>
      <img src={image} alt="" />
      </div>
      <h1>{name}</h1>
      <h4>{job}</h4>
      <p>{readMOre ? text : `${text.substring(0,40)}`}.. <button className='btn-1' onClick={()=>setreadMOre(!readMOre)}>{readMOre ?'showless':'readmore'}</button></p>

      <button onClick={NextIndex} disabled={!hasnext}>Next</button>
      <button onClick={PrevIndex} disabled={!hasPrev}>Prev</button>
      <div className='random'>
      <button className='btns' onClick={MathRandom}>Suprise me</button>
      </div>
    </div>
  )
}

export default Review
