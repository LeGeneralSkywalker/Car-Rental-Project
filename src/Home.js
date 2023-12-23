import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useFetch from "./useFetch";
import DatePicker from "./DateComponent";
import DateComponent from "./DateComponent";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import Figure from "react-bootstrap/Figure";
import { Button } from "react-bootstrap";
import {useLocation, useNavigate, Link} from 'react-router-dom';




function Home() {
    const [carSelected, selectCar] = useState();
    const [locationSelected, selectCity] = useState('');

    const selectCarHandler = (e) =>{
      selectCar(e.target.value);
      console.log(e.target.value);
    }

    function selectedCityHandler(e){
      selectCity(e.target.value);
      console.log(e.target.value);
    }
  return (
    <div>
      <main>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image
                src="https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                rounded
                className="img-fluid"
              />
            </Col>
            <Col xs={6} md={4}>
              <Image
                src="https://images.pexels.com/photos/2896135/pexels-photo-2896135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                rounded
                className="img-fluid"
              />
            </Col>
            <Col xs={6} md={4}>
              <Image
                src="https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                rounded
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
        <div>
          <h1 className="my-3">Choose Your Dream Car</h1>
        </div>
        <Container>
          <Row>
            <Col xs={6} md={4}>
            <Form.Select aria-label="Default select example" onChange={selectCarHandler}>
            <option>Select Car</option>
            <option value="Lamborghini Aventador">Lamborghini Aventador</option>
            <option value="Lamborghini Huracan">Lamborghini Huracan</option>
            <option value="Lamborghini Urus">Lamborghini Urus</option>
            </Form.Select>
              
            </Col>
            <Col xs={6} md={4}>
                <DateComponent placeholder='Start Date'/>
            </Col>
            <Col xs={6} md={4}>
                <DateComponent placeholder='End Date'/>
            </Col>
          </Row>
          <Row className="my-5">
            <Col xs={6} md={4}>
                <Form.Select aria-label="Default select example" onChange={selectedCityHandler}>
                 <option>Select Location</option>
                 <option value="Jerusalem, Israel">Jerusalem, Israel</option>
                 <option value="Madrid, Spain">Madrid, Spain</option>
                 <option value="Beijing, China">Beijing, China</option>
            </Form.Select>
            </Col>
            <Col xs={6} md={4}>
              <Link to={`/payment?car=${carSelected}&city=${locationSelected}`}>
                  <button>Submit</button>
              </Link>
            </Col>
          </Row>
          <Row>
            <h3 className="my-4">Why Choose Us?</h3>
            <Col xs={6} md={4}>
            <Figure>
            <Figure.Image
            width={171}
            height={180}
            alt="171x180"
             src="https://cdn-icons-png.flaticon.com/128/741/741407.png"
            />
            <Figure.Caption>
            <h5>Competitive Pricing</h5>
            </Figure.Caption>
            </Figure>
            </Col>
            <Col xs={6} md={4}>
            <Figure>
            <Figure.Image
            width={171}
            height={180}
            alt="171x180"
             src="https://cdn-icons-png.flaticon.com/128/3135/3135706.png"
            />
            <Figure.Caption>
            <h5>Competitive Pricing</h5>
            </Figure.Caption>
            </Figure>
            </Col>
            <Col xs={6} md={4}>
            <Figure>
            <Figure.Image
            width={171}
            height={180}
            alt="171x180"
             src="https://cdn-icons-png.flaticon.com/128/4961/4961759.png"
            />
            <Figure.Caption>
            <h5>Support 24/7</h5>
            </Figure.Caption>
            </Figure>
            </Col>
          </Row>
          <Row className="py-5">
            <Col>
                <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Excellent Service</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">5 Stars</Card.Subtitle>
            <Card.Text>
            Super and professional. -Alexander
            </Card.Text>
        </Card.Body>
        </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Good service all around</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">5 Stars</Card.Subtitle>
            <Card.Text>
              all information is clear. -Fadi
            </Card.Text>
        </Card.Body>
        </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Perfect experience</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">5 Stars</Card.Subtitle>
            <Card.Text>
            competitive pricing. -Denise
            </Card.Text>
        </Card.Body>
        </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Car was super clean</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">5 Stars</Card.Subtitle>
            <Card.Text>
            excellent service. -David
            </Card.Text>
        </Card.Body>
        </Card>
            </Col>
          </Row> 
        </Container>
        <h2>Our Locations</h2>
        <Carousel>
      <Carousel.Item interval={2000}>
      <img src="https://images.pexels.com/photos/2087387/pexels-photo-2087387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        <Carousel.Caption>
          <h3>Jerusalem</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src="https://images.pexels.com/photos/670261/pexels-photo-670261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        <Carousel.Caption>
          <h3>Madrid</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://images.pexels.com/photos/19872/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        <Carousel.Caption>
          <h3>Beijing</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
      </main>
      <footer className="py-5 my-5 bg-dark">
        <p className='text-white text-center'>All right reserved @sean</p>
      </footer>
    </div>
  );
}

export default Home;
