import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import {useLocation, useNavigate, Link} from 'react-router-dom';
import axios from "axios";

function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history=useNavigate();

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/signin", {
                email, password
            })
            .then((res)=>{
                if(res.data=="email not found"){
                    alert('Email not found!')
                }
                if(res.data=="ok"){
                    //delete local storage before redirect
                    localStorage.clear();
                    history("/user",{state:{id:email}})
                }
                else if(res.data=="not ok"){
                    alert("Incorrect password")
                }
            })
        }
        catch(e){
            console.log(e);
        }
    }

    return(
        <div>
            <Container>
                <h1>Please sign in</h1>
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

export default SignIn;