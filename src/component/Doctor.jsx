import React from 'react'
import CardDoctor from './CardDoctor';
import Data from './CardData';


const ncards=(val2)=>{
  return(
    <CardDoctor
    key={val2.id}
    title={val2.title}
    imgsrc={val2.image}
    text={val2.text}
    phone={val2.phone}
    gmail={val2.gmail}
    />
  )
}

const Doctor = () => {
  return (
    <div className='Doctor' >
     
      <div className='Doctor-title'>
        <h2 id='doctor'>Our Doctors</h2>
      </div>
      
      <div className='Doctor-card'>
        {Data.map((val2,index) => (
          <div key={val2.id} >
           {ncards(val2)}
          </div>
        ))}
      </div>  

    </div>
  )
}

export default Doctor