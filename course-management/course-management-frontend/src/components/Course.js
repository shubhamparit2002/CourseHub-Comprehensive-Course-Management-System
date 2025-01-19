import axios from "axios";
import React from "react";
import {
    Card,
    CardBody,
    Cardtitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from "reactstrap"
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Course =  ({course,update}) =>{


    const updateCourse =(course) =>{
        axios.put(`${base_url}/courses/${course.id}`,course).then(
            (response) => {
                toast.success("Course updated successfully");
                update(course.id); // Optionally, call this if update logic exists
            },
            (error) => { 
                toast.error("Failed to update the course");
            }
        )
    
    }

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {
                toast.success("Course deleted");
                update(id);
            },
            (error) => {
                toast.error("Failed to Delete");
            }
        );
};

    return(

        <Card className="text-center" >
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={ () => {
                        deleteCourse(course.id);
                    }} >Delete</Button>
                    <Button color="warning m-1" onClick={() =>{
                        updateCourse(course);
                    }} >Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}
export default Course;