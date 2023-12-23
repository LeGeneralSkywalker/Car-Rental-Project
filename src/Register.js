import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import {useLocation, useNavigate, Link} from 'react-router-dom';
import axios from "axios"

function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history=useNavigate();

    async function submit(e){
    e.preventDefault();
    try{
        //sends data to endpoint /signup:email, password which are parsed in app.js by req.body
        await axios.post("http://localhost:8000/register",{
            email,password
       })
       .then((res)=>{
        if(res.data=='exists')
            alert('user already exists');
        else if(res.data=='notexists'){
            //clear localStorage and redirect
            localStorage.clear();
            history("/user",{state:{id:email}})
        }
       })
    }
    catch{
        console.log(e);
    }
}
    return(
        <div>
            <Container>
            <h1>Please register</h1>
                <form type='POST'>
                <Form.Label htmlFor="inputEmail">email</Form.Label>
                <Form.Control
                onChange={(e) => {setEmail(e.target.value)}}
                type="email"
                id="inputEmail"
                aria-describedby="passwordHelpBlock"
                />
                <Form.Label htmlFor="inputPassword">password</Form.Label>
                <Form.Control
                onChange={(e) => {setPassword(e.target.value)}}
                type="password"
                id="inputPassword"
                aria-describedby="passwordHelpBlock"
                />
                <button onClick={submit}>Submit</button>
                </form>
            </Container>
        </div>
    )
}

export default Register;