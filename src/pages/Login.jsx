import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  const onfinishHandler = async (values) => {
    try {
      const response = await axios.post("/users/login", values);
      if (response.data.success) {
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        toast("Redirecting to Home Page",{
          position:"top-center",
          autoClose:3000,
          closeOnClick:true,
          pauseOnHover:true,
          draggable:true,
          theme:"dark"
        });
        localStorage.setItem("token", response.data.data);
        navigate("/home");
      } else {
        toast.error(response.data.message, {
          position: "top-center",
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong",{
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
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="authcard-title">Welcome Back</h1>
        <Form layout="vertical" onFinish={onfinishHandler}>
          <Form.Item className="registerlabel" label="Email" name="email">
            <Input className="registerinput" placeholder="Email" />
          </Form.Item>
          <Form.Item className="registerlabel" label="Password" name="password">
            <Input
              className="registerinput"
              placeholder="Password"
              type="password"
            />
          </Form.Item>
          <button className="Primary-Button my-2" htmlType="submit">
            Login
          </button>
          <Link to="/register" className="anchor mt-2">
            CLICK HERE TO REGISTER
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Login;
