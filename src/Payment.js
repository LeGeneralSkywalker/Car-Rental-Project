import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from "axios"



function Payment(){
    const searchParams = new URLSearchParams(useLocation().search);
    const area = searchParams.get('city');
    const car = searchParams.get('car');
    const price = Math.floor(Math.random()*1000);
    const orderNO = Math.floor(Math.random()*10000);
    async function submit(e){
        const email = localStorage.getItem('userId');
        const dataToSend = { email, area, car, price, orderNO };
        console.log('Data being sent to backend:', dataToSend);
        try{
            await axios.post("http://localhost:8000/payment",{
                email,area,car,price,orderNO
            })
        }
        catch(e){
            console.log(e);
        }
    }
    return(
        <div>
            <Container>
                <h1>Payment Page</h1>
                <p>Car: {car}</p>
                <p>Location: {area}</p>
                <p>Price: {price}</p>
                <Link to={`/order?orderNO=${orderNO}`}>
                   <button onClick={submit}>Pay</button>
                </Link>
            </Container>
        </div>
    )
}

export default Payment;