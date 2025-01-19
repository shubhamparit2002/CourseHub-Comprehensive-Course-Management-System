import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Row } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import Home from "./components/Home";
import Course from './components/Course';
import Allcourse from './components/Allcourses';
import AddCourse from './components/Addcourse';
import Header from './components/Header';
import Menus from './components/Menus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const btnHandler = () => {
    toast.success("Done", {
      position: "top-center"
    });
  };

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />

          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-course" element={<Allcourse />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
