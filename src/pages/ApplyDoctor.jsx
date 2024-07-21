import { Layout, Form, Row, Col, Input } from "antd";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ApplyDoctor = () => {
  const [applyData, setapplyData] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    address: "",
    phoneNumber: "",
    specialization: "",
    experience: "",
    feePerCunsaltation: "",
    Status: "",
    timings: "",
  });

  const handleChange = (e) => {
    console.log(e);
    // eslint-disable-next-line no-undef
    setapplyData({ ...applyData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your Express API to add a new product
      await axios.post("/applydoctor/apply", applyData);

      // Clear the form fields after successful submission
      setapplyData({
        userId: "",
        firstName: "",
        lastName: "",
        email: "",
        website: "",
        address: "",
        phoneNumber: "",
        specialization: "",
        experience: "",
        feePerCunsaltation: "",
        Status: "",
        timings: "",
        // Reset other form fields here
      });

      toast("Doctor Applied Successfully",{
        position:"top-center",
        autoClose:3000,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        theme:"dark"
      });
    } catch (error) {
      console.error("Error adding Doctor:", error);
      toast("Error adding Doctor. Please try again later...",{
        position:"top-center",
        autoClose:3000,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        theme:"dark"
      });
    }
  };

  return (
    <Layout className="Containerdoctor">
      <h1 className="text-center">ApplyDoctor</h1>
      <Form Layout="vertical" className="m-3">
        <h4>Personal Details:</h4>
        <Row gutter={20}>
          <Col className="Col">
            <Form.Item label="FirstName" className="applyitem" required>
              <Input
                type="text"
                placeholder="your first name"
                onChange={handleChange}
                value={applyData?.firstName}
                name="firstName"
                id="firstName"
              />
            </Form.Item>
          </Col>

          <Col className="Col">
            <Form.Item label="LastName" required>
              <Input
                type="text"
                placeholder="your last name"
                onChange={handleChange}
                value={applyData.lastName}
                name="lastName"
                id="lastName"
              />
            </Form.Item>
          </Col>

          <Col className="Col">
            <Form.Item label="Phone No" required>
              <Input
                type="number"
                placeholder="your contact no"
                onChange={handleChange}
                value={applyData.phoneNumber}
                name="phoneNumber"
                id="phoneNumber"
              />
            </Form.Item>
          </Col>

          <Col className="Col">
            <Form.Item label="Email" required>
              <Input
                type="email"
                placeholder="your email address"
                onChange={handleChange}
                value={applyData.email}
                name="email"
                id="email"
              />
            </Form.Item>
          </Col>

          <Col className="Col">
            <Form.Item label="Website">
              <Input
                type="text"
                placeholder="your website"
                onChange={handleChange}
                value={applyData.website}
                name="website"
                id="website"
              />
            </Form.Item>
          </Col>

          <Col className="Col">
            <Form.Item label="Address" required>
              <Input
                type="text"
                placeholder="your clinic address"
                onChange={handleChange}
                value={applyData.address}
                name="address"
                id="address"
              />
            </Form.Item>
          </Col>
        </Row>

        <h4>Professional Details:</h4>
        <Row gutter={20}>
          <Col className="Col">
            <Form.Item label="Specialization" required>
              <Input
                type="text"
                placeholder="your specialization"
                onChange={handleChange}
                value={applyData.specialization}
                name="specialization"
                id="specialization"
              />
            </Form.Item>
          </Col>

          <Col className="Col">
            <Form.Item label="Experience" required>
              <Input
                type="text"
                placeholder="your experience"
                onChange={handleChange}
                value={applyData.experience}
                name="experience"
                id="experience"
              />
            </Form.Item>
          </Col>

          <Col className="Col">
            <Form.Item label="Fees Per Cunsaltation" required>
              <Input
                type="number"
                placeholder="your fees"
                onChange={handleChange}
                value={applyData.feePerCunsaltation}
                name="feePerCunsaltation"
                id="feePerCunsaltation"
              />
            </Form.Item>
          </Col>
        
          <Col className="Colbtn">
            <button
              className="btn btn-primary form-btn"
              id="applybutton"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default ApplyDoctor;
