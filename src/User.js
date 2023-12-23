import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from 'react-router-dom';
import Container from "react-bootstrap/Container";

function User() {
    const location = useLocation();
    const [userId, setUserId] = useState('');

    
    //let isFull = localStorage.getItem('userId');
    //console.log(isFull);

    useEffect(() => {
        const storedId = localStorage.getItem('userId');
        if (!storedId && location.state?.id) {
            setUserId(location.state.id);
            localStorage.setItem('userId', location.state.id);
        } else {
            setUserId(storedId);
        }
    }, [location.state]);

    return (
        <div>
            <Container>
                {userId ? (
                    <h1>Hello {userId} and welcome</h1>
                ) : (
                    <h1>You are currently not logged in</h1>
                )}
            </Container>
        </div>
    )
}

export default User;

