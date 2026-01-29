import React,{useState} from 'react'
import Service from './Service';

const Contact = ({name}) => {
  const [name1,setName]=useState("Likhitha");
  const toggleName=()=>{
    setName(name==="Likhitha"?"Likki":"Likhitha")
  }
  return (
    <div>
      <h1>Name: {name1}</h1>
      <button onClick={toggleName}>Toggle</button>
      <Service name = {name}/>
    </div>


  )
}
export default Contact