import React, { useState } from 'react'

/* If function is passed as Props
interface ButtonProps {
  sum: (a: number, b: number) => number;
  logMessage: (message: string) => void;

  // turn off type checking
  doSomething: (params: any) => any;
}
 */
const Functions = () => {
  const [num1,setNum1]=useState<number>(0)
  const [num2,setNum2]=useState<number>(0)

  const handleAdd=(num1:number,num2:number):number=>{
    return num1+num2
  }
  return (
    <div className='function'>
<form>
    <input type="number" value={num1} onChange={(e)=>setNum1(parseInt(e.target.value))}  />
    <input type="number" value={num2} onChange={(e)=>setNum2(parseInt(e.target.value))} />
</form>
{handleAdd(num1,num2)}
    </div>
  )
}

export default Functions