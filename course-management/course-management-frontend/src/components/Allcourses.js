import react, { useEffect, useState }  from "react";
import Course from "./Course";
import axios from "axios";
import base_url from "./../api/bootapi"
import { toast } from "react-toastify";


const Allcourse=()=>{

    useEffect(() =>{
        document.title="All Courses ";
    }, []);


    const getAllCoursesFromServer = () =>{
        axios.get(`${base_url}/courses`).then(
            (response) => {
                //Seccess
                //console.log(Response);
                console.log(response.data);
                setCourses(response.data);
            },
            // Error failure
            (error) =>{
                console.log(error);
                toast.error("Something went wrong");
            }
        );
    };

    //calling loading course function

    useEffect(() => {
        getAllCoursesFromServer();
    }, []);


    const[courses,setCourses]=useState([]);

    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id != id));
    }



    return(

        <div>
            <h1>All course</h1>
            <p> List of All Course are as  follows</p>
            {
                courses.length > 0 ? courses.map((item) => <Course key={item.id} course={item} update = {updateCourses} />) : "No Courses"
            }
        </div>
    )
}
export default Allcourse;
