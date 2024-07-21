import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
       <div className='Header'>
          <div className='subheader'>
            <p>Welcome to a Professional Health Care</p>
          </div>
          <div className='subheader2'>
            <div className='subheader2-phone'>
              <div className='phone-logo'>
               <img src={"https://cdn-icons-png.flaticon.com/512/7044/7044607.png"} alt=''/>
              </div>
              <span>
                101-213-2568
              </span>
            </div>
            <div className='subheader2-date'>
               <div className='phone-logo'>
                <img src={"https://cdn-icons-png.flaticon.com/512/244/244027.png"} alt=''/>
               </div>
              <span>6:00 AM - 10:00 PM (Mon-Fri)</span>
            </div>
            <div className='subheader2-mail'>
              <div className='phone-logo'>
                 <img src={"https://cdn-icons-png.flaticon.com/512/240/240128.png"} alt=''/>
              </div>
              <span>
                ingo@gmail.com
              </span>
            </div>
          </div>
       </div>
       
       
       <div className='Header2'>
          <div className='Header-logo'>
            <div className='Headerlogo-img'>
           <img src={"https://media.istockphoto.com/id/1165451954/vector/caduceus.jpg?s=612x612&w=0&k=20&c=7yYfhCYQipajSuuVeDlTvrUSTYMErSfzIsxg_60mY-s="} alt=''/>
            </div>
          </div>
          <div className='Header2-button'>
            <a href='#top'>Home</a>
            <a href='#about'>About us</a>
            <a href='#news'>News</a>
            <a href='#contact'>Contact</a>
            <span><a href='#l'><Link to='/applydoctor'>Apply Doctor</Link></a></span>
            <span><a href='#appointment'>Make an appointment</a></span>
          </div>
       </div>
       </>
  )
}

export default Navbar
