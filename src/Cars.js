import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";


function Cars(){
  let cars =[
    {
      model:'Lamborghini Aventador',
      year:2019,
      gear:'Automatic',
      image: 'https://images.pexels.com/photos/10394772/pexels-photo-10394772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      model:'Lamborghini Huracan',
      year:2021,
      gear:'Manual',
      image:'https://images.pexels.com/photos/13990558/pexels-photo-13990558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      model:'Lamborghini Urus',
      year:2023,
      gear:'Automatic',
      image: 'https://images.pexels.com/photos/12905857/pexels-photo-12905857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      model:'Ferarri 488',
      year:2024,
      gear:"Automatic",
      image: 'https://images.pexels.com/photos/4651250/pexels-photo-4651250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      model:'Ferrari California',
      year:2020,
      gear:'Manual',
      image:'https://images.pexels.com/photos/404190/pexels-photo-404190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      model:'Ferrari Purosangue',
      year:2017,
      gear:'Manual',
      image:'https://images.pexels.com/photos/35964/ferrari-red-auto-sports-car.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ]
  //Make 3 cars in one row
  let carRows = [];
  const carsPerRow = 3;
  for(let i=0; i<=cars.length; i+=carsPerRow){
    const carRow = cars.slice(i, i + carsPerRow).map((car, index) => (
      <Col key={index} xs={12} sm={6} md={4}>
        <Card>
        <Card.Img variant="top" src={car.image} />
          <Card.Body>
            <Card.Title>{car.model}</Card.Title>
            <Card.Text>Year: {car.year}</Card.Text>
            <Card.Text>Gear: {car.gear}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ));
    //push each row into the array
    carRows.push(
      <Row key={i} className="mb-3">
        {carRow}
      </Row>
    )
  }

    return (
        <div className="cars">
    <Container>
        {carRows}
    </Container>
  
        </div>
    )
}

export default Cars;