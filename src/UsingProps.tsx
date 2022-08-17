import React from 'react'
import { IValue } from './App';
interface Idetails{
    name:string;
    age:number;
    value: IValue;
    arrValues:IValue[];
    count:number;
    setCount:React.Dispatch<React.SetStateAction<number>>;
    propsFn:()=>void
}
const UsingProps = (props:Idetails) => {
    const incCount=()=>{
      props.setCount(props.count+1)
    }
    const decCount=()=>{
        props.setCount(props.count-1)
   }
  return (
  <>
  &nbsp;{props.propsFn()}
 <button onClick={incCount}>IncreaseCount From Child</button>
 <button onClick={decCount}>DecreaseCount From Child</button>
  <div>Using Props</div>
  <ul>
    <li>PropsName- {props.name} </li>
    <li>PropsAge- {props.age} </li>
  </ul>
  <ol>
    <li>ObjectName- {props.value.name}</li>
    <li>ObjectAge- {props.value.age}</li>
  </ol>
 <br/>
  {
    props.arrValues?.map((val,i)=>{
        return(
            <div key={i}>
            {i+1}. ArrObjName - {val.name}  <br/>
            &nbsp; ArrObjAge - {val.age}<br/>
            </div>
        )
    })
  }
  </> 
    
  )
}

export default UsingProps