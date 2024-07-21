import React,{useState} from 'react';
import axios from "axios";

const Appointment = () => {
  
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    SelectDate: "",
    SelectDepartment: "",
    PhoneNumber: "",
    AdditionalMessage: ""
  });

  const handleChange = (e) => {
    console.log(e);
    // eslint-disable-next-line no-undef
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleImageInputChange = (e) => {
  //   const { name, value } = e.target;
  //   // Split the input value by line breaks to create an array of image URLs
  //   setFormData({ ...formData, [name]: value.split("\n") });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your Express API to add a new product
      await axios.post("/doctors/add", formData);

      // Clear the form fields after successful submission
      setFormData({
        Name: "",
        Email: "",
        SelectDate: "",
        SelectDepartment: "",
        PhoneNumber: "",
        AdditionalMessage: ""
        // Reset other form fields here
      });

      alert("Appointment added successfully!");
    } catch (error) {
      console.error("Error adding Appointment:", error);
      alert("Error adding Appointment. Please try again later.");
    }
  };

  
  
  return (
    <div className='Appointment' id='appointment'>
      <img src={"https://themewagon.github.io/health-center/images/appointment-image.jpg"} alt=''/>
      <div className='Appointment-data'>
        <div className='Appointmentdata-head'>
          <h2>Make an Appointment</h2>
        </div>
        <form className='Appointmentdata-form' onSubmit={handleSubmit}>
          <div className='Appointmentdata-form1'>
           <div className='Appointmentdata-subform1'>
             <div className='subform1-name'>
              <h4>Name</h4>
             </div>
             <div className='subform1-input'>
              <input type='text' placeholder='Full Name' id='Name' name='Name' value={formData.Name} onChange={handleChange} required></input>
             </div>
           </div>
           <div className='Appointmentdata-subform1'>
             <div className='subform1-name'>
               <h4>Email</h4>
             </div>
             <div className='subform1-input'>
               <input type='email' placeholder='Your Email' id='Email' name='Email' value={formData.Email} onChange={handleChange} required></input>
             </div>
           </div>
          </div>
          <div className='Appointmentdata-form2'>
          <div className='Appointmentdata-subform1'>
             <div className='subform1-name'>
              <h4>Select Date</h4>
             </div>
             <div className='subform1-input'>
              <input type='date' id='SelectDate' name='SelectDate' value={formData.SelectDate} onChange={handleChange} required></input>
             </div>
          </div>
          <div className='Appointmentdata-subform1'>
             <div className='subform1-name'>
              <h4>Select Department</h4>
             </div>
             <div className='subform1-input'>
               <select id='SelectDepartment' name='SelectDepartment' value={formData.SelectDepartment} onChange={handleChange} required>
                <option></option> 
                <option>General Health</option>
                 <option>Urology</option>
                 <option>Cardiology</option>
                 <option>Neurology</option>
                 <option>Radiology</option>
                 <option>Emergency Medicine</option>
                 <option>Orthopedics</option>
               </select>
             </div>
          </div>
          </div>
          <div className='Appointmentdata-form3'>
            <div className='subform3-name'>
             <h4>Phone Number</h4>
            </div>
            <div className='subform3-input'>
             <input type='number'  placeholder='Phone' id='PhoneNumber' name='PhoneNumber' value={formData.PhoneNumber} onChange={handleChange} required></input>
            </div>
          </div>
          <div className='Appointmentdata-form4'>
            <div className='subform4-name'>
             <h4>Additional Message</h4>
            </div>
            <div className='subform4-input'>
             <textarea type='text' placeholder='Message' id='AdditionalMessage' name='AdditionalMessage' value={formData.AdditionalMessage} onChange={handleChange} required></textarea>
            </div>
          </div>
          <div className='Appointmentdata-button'>
          <button>Submit Button</button>
          </div>
        </form>
        
      </div>
    </div>
  )
}

export default Appointment