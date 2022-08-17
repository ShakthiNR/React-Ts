import React, { useState } from 'react'
interface IBike {
    name: string; //--- all are small letters
    brand: string;
    price: number;
    isAvailable ?:boolean
  }

const ArrayOfObject = () => {
  //  const[bikes,setBikes]=useState<IBike[]>([]) -- empty Intialization
   //Intialized with default values
  const[bikes,setBikes]=useState<IBike[]>(
       [ 
        {name:"Metor",brand:"RoyalEnfied",price:4000,isAvailable:true},
        {name:"Classic",brand:"RoyalEnfield",price:200,isAvailable:false},
        {name:"Parak",brand:"Jawa",price:2200,isAvailable:false}
       ]
        )
  return (
    <>
    <div className='arrayOfObj'>
    {
  bikes?.map((bike)=>{
    return(
        <>
        <ul>
            <li>BikeName:{bike.name}</li>
            <li>BikeBrand:{bike.brand}</li>
            <li>BikePrice:{bike.price}</li>
            <li>Availability:{bike.isAvailable ? "True":"False"}</li>
        </ul>
        </>
    )
})
    }
    </div>
    </>
  )
}

export default ArrayOfObject