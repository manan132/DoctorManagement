import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const DCarousel = () => {
  return (
    <div className='Carousel'>
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block"
        src="https://static.vecteezy.com/system/resources/previews/001/264/288/large_2x/doctor-writing-prescription-for-patient-free-photo.jpg" 
        alt="First slide"
      />
      <Carousel.Caption className='Carousel-info'>
        <h3>LET'S MAKE YOUR LIFE HAPPIER</h3>
        <h5>Healthy Living</h5>
        <span>Meet our Doctors</span>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src="https://www.staffcare.com/siteassets/blogs/advice-and-insights/endorse-locums-lifestyle.jpg"
        alt="Second slide"
      />
      <Carousel.Caption className='Carousel-info'>
        <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
        <h5>New lifestyle</h5>
        <span>More about us</span>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src="https://www.usatoday.com/gcdn/presto/2023/05/18/USAT/d7788461-f5e4-4a00-936f-9a78c9d28f4e-GettyImages-1394880010.jpg?crop=5999,3375,x0,y0&width=3200&height=1801&format=pjpg&auto=webp"
        alt="Third slide"
      />
      <Carousel.Caption className='Carousel-info'>
        <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
        <h5>Your Health Benefits</h5>
        <span>Read Stories</span>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
)
}

export default DCarousel