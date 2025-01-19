import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { Container, Form, FormGroup, Button } from "reactstrap";
import base_url from "./../api/bootapi"
import { toast } from "react-toastify";

const AddCourse = () => {
  useEffect(() => {
    document.title = "Add New Course ";
  }, []);

  // Initialize the state for course
  const [course, setCourse] = useState({});

  // Form handler function
  const handleForm = (e) => {
    console.log(course);
    postDatatoServer(course);
    e.preventDefault();
  };


  const postDatatoServer = (data) => {
    axios.post(`${base_url}/courses`,data).then(
        (response) => {
            console.log(response);
            console.log("success");
            toast.success("Course Added!");
            setCourse({ id:"",title:"", description:""})
        },
        (error) => {
            console.log(error);
            console.log("error");
            toast.warning("Clear");
        }
    )
  }
  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Course Details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label htmlFor="userId">Course Id </label>
          <br />
          <input
            type="text"
            placeholder="Enter Here"
            name="userId"
            id="userId"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="title">Course Title</label>
          <br />
          <input
            type="text"
            placeholder="Enter Course Title"
            id="title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="description">Course Description</label>
          <br />
          <input
            type="textarea"
            placeholder="Enter Course Description"
            id="description"
            style={{ height: 200 }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>

        <Container>
          <Button type="submit" color="success">
            Add Course
          </Button>
          <Button type="reset" color="warning" 
          onClick={() => {
            setCourse({});
          }}
          >
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;
