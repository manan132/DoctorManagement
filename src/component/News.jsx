import React from 'react'
import CardNews from './CardNews'
import NewsData from './NewsData'

const ncard=(val2)=>{
  return(
    <CardNews
        key={val2.id}
        img={val2.image}
        date={val2.date}
        title={val2.title}
        text={val2.text}
        bioimage={val2.bioimage}
        name={val2.name}
        specialization={val2.specialization}
    />
  )
}

const News = () => {
  return (
    <div className='News' id='news'>
      <div className='News-title'>
        <h2>Latest News</h2>
      </div>
      <div className='News-card'>
        {NewsData.map((val2,index) => (
        <div key={val2.id} >
         {ncard(val2)}
        </div>
      ))}    
      </div>

    </div>
  )
}

export default News