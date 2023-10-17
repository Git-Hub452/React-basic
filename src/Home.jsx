import React from 'react'
import { useState } from 'react'
const Home = ()=>{
  // const state = useState(0)
  // const state1 = State[0]
  // const state2 = State[1]
  const [count,setCount] =useState(0)
  
  return(
    <div>
     <h1>{count} </h1>
     <button onClick={()=>setCount(count+1)}>+</button> 
    </div>
  )
}

export default Home