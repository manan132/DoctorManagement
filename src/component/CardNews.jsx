import React from 'react'
import Card from 'react-bootstrap/Card';

const CardNews = (val2) => {
  return (
    <div>
    <Card className='Card1' style={{ width: '360px',height:'510px' }}>
    <Card.Img className='Newscard-Image' variant="top" src={val2.img} />
  <Card.Body className='Newscard-body'>
   <div className='Card-date'>
    <span>{val2.date}</span>
   </div>
   <Card.Title className='Card-title'>
      <span> {val2.title}</span>
    </Card.Title>
    <Card.Text className='Card-text'>
       {val2.text}

  </Card.Text>
  
  <div className='Newscard-bio'>
      <div className='Newscardbio-image'>
          <img src={val2.bioimage} alt="....."/>
  
      </div>
      <div className='Newscardbio-name'>
        <div className='Newscardname-head'>
          <h3>{val2.name}</h3>
        </div>
        <div className='Newscardname-title'>
          <p>{val2.specialization}</p>
         </div>
       </div>
  </div>
  </Card.Body>
      </Card>
   </div>
  )
}

export default CardNews
