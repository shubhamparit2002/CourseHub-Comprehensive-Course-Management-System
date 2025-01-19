import React, { useEffect } from "react";
import { Container, Button} from "reactstrap"; // Import Container instead of Jumbotron

const Home = () =>{

     useEffect(() =>{
            document.title="Home Page";
        }, []);

    return(
        <div>
        <Container className=" width-100% p-4 my-1 bg-secondary text-white rounded text-center" >
            <h1>Shubham Parit</h1>
            <p>This is developed By Shubham Parit for inhand Experiance with React and SpringBoot</p>
            <Button color="primary">Start Using</Button>
        </Container >
        </div>
    );
}   
export default Home;