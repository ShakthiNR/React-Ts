import { useState } from 'react';

import './App.css';
import ArrayOfObject from './ArrayOfObject';
import Functions from './Functions';
import InputElements from './InputElements';
import UsingProps from './UsingProps';
export interface IValue {
  name:String
  age:number | string
  isStaff?:boolean // optional
}
function App() {
  const [name,setName]=useState<string>("empty") //String Type
  const[age,setAge] = useState<number | string>(0) //union type -- can be either num/string
  const [value,setValue] = useState<IValue> ({name:"Person",age:48}) //Interface - for object
  const [arrValues,setArrValues] = useState<IValue[]>([{name:"Arr1",age:8},{name:"Arr2",age:4}])
  const [count,setCount]=useState(0)
  
  const handleString =()=>{
      setName("shakthi")
  }
  const handleUnion =()=>{
    //setAge("ki")
    setAge(123)
  }
  const propsFn = ()=>{
    console.log("Iam From Parent fn");
  }

  return (
   
    <div className="App" >
For TypeDef(Basic)
      <div className='typeDef'>
          <div>
             <p>TypeName:{name}</p> 
             <p>TypeAge:{age}</p>
          </div>
          <div>
            <button type="reset" onClick={handleString}>String Update</button>
             <button onClick={handleUnion}>Number update </button>
          </div>
      </div>
For Object Type
      <div className='Object'>
            ObjectName:{value?.name} <br/>
            ObjectAge:{value?.age}
      </div>
For Array Of Objects Type
      <ArrayOfObject />
For InputElement
      <InputElements />
For Props - String Num Obj ArrOfObj, stateVariable, stateFn and normalFunction(propsFn)
<br/>
<div className='propsStyle'>
Count - {count}
<UsingProps 
name='Rudra' age={14}  propsFn={propsFn} 
value={value} arrValues={arrValues} 
count={count} setCount={setCount}
 />
</div>

For Function
   <Functions />
    </div>
  );
}

export default App;
