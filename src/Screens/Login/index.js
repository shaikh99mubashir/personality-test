import React, { useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const handleModalShow = () => setShowModal(true);
  const [studentID, setStudentID] = useState('');
  const [studentName, setStudentName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [semester, setSemester] = useState('');
  const [year, setYear] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const navigate = useNavigate();
  // const handleModalClose = () => setShowModal(false);

  const handleModalClose = () => {
    setShowModal(false);
    setIsRegisterMode(false); // Reset to login mode when closing modal
  };

  const handleSubmit = (event) => {
    // Add your login logic here
    event.preventDefault();
    console.log('Email:', email, 'Password:', password);
    // For demonstration purposes, we're just closing the modal
    handleModalClose();
    navigate('/Home');
  };

  const handleRegisterClick = () => {
    // Switch to registration mode
    setIsRegisterMode(true);
  };

  const handleCancelRegister = () => {
    // Switch back to login mode
    setIsRegisterMode(false);
  };

  const handleRegisterSubmit = (event) => {
    // Add your registration logic here
    event.preventDefault();
    console.log('Register - Student ID, Student Name, Father Name, Semester, Year, Contact Number');
    // For demonstration purposes, we're just logging the values
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-md-6 p-0 text-center d-flex flex-column justify-content-center align-items-center"
          style={{ gap: "250px" }}
        >
          <img
            src={require("../../Images/MBTIBooklogo.jpg")}
            alt="background"
            width={200}
          />
          <img
            src={require("../../Images/MBTIBooklogo2.jpg")}
            alt="background"
            className="img-fluid"
            width={200}
          />
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center p-0 position-relative">
          <img
            src={require("../../Images/MBTIBookbg.jpg")}
            alt="logo"
            className="w-100 h-100"
          />
          <div className="position-absolute top-50 start-50 translate-middle text-light text-center">
            <p
              className="mt-3"
              style={{
                fontSize: "25px",
                fontWeight: "600",
                backgroundColor:'#ea304c',
                padding:'10px',
                borderRadius:'10px',
                color: "white",
                whiteSpace: "nowrap",
              }}
            >
              Unlock the Power of Personality Testing
            </p>
            <button className="btn " style={{backgroundColor:'#1aa9e1', fontWeight:600}} onClick={handleModalShow}
              data-bs-toggle="modal"
              data-bs-target="#loginModal">Login / Register</button>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <Modal show={showModal} onHide={handleModalClose} id="loginModal" centered backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{isRegisterMode ? 'Register' : 'Login'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {!isRegisterMode &&
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label >Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="mt-3">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button style={{backgroundColor:'#1aa9e1'}} type="submit" className="w-100 mt-3">
              Submit
            </Button>
          </Form>
        }
          {!isRegisterMode ? (
              <>
                <p className="mt-3 text-center">
                  Don't have an account?{' '}
                  <span className="text-primary"  style={{ cursor: 'pointer' }} onClick={handleRegisterClick}>
                    Register!
                  </span>
                </p>
              </>
            ) : (
              <>
                {/* Registration fields */}
                 {/* Registration fields */}
                 <Form.Group controlId="formStudentID">
                  <Form.Label>Student ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Student ID"
                    value={studentID}
                    onChange={(e) => setStudentID(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formStudentName">
                  <Form.Label className="mt-3">Student Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Student Name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formFatherName">
                  <Form.Label className="mt-3">Father Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Father Name"
                    value={fatherName}
                    onChange={(e) => setFatherName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formSemester">
                  <Form.Label className="mt-3">Semester</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Semester"
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formYear">
                  <Form.Label className="mt-3">Year</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formContactNumber">
                  <Form.Label className="mt-3">Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Contact Number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                  />
                </Form.Group>
                <div className="d-flex align-items-center justify-content-center" style={{gap:'20px'}}>
                <Button style={{backgroundColor:'#1aa9e1', fontWeight:600}} type="submit" className="mt-3">
                  Register
                </Button>
                <Button variant="secondary" style={{ fontWeight:600}} onClick={handleCancelRegister} className="mt-3">
                  Cancel
                </Button>
                </div>
              </>
            )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
