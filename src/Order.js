import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from 'react-router-dom';


function Order() {
    const searchParams = new URLSearchParams(useLocation().search);
    const orderNO = searchParams.get('orderNO');
  
    return (
      <div>
        <h1>Thank you for your order</h1>
        <p>Order Number: {orderNO}</p>
      </div>
    );
  }
  
  export default Order;