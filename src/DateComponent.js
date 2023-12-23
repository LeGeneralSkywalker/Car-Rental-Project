import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css'; // Import Datepicker styles
import DatePicker from 'react-datepicker';
import { Container, Row, Col } from 'react-bootstrap';

function DateComponent({placeholder}) {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Container>
      <Row>
        <Col>
          
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MM/dd/yyyy"
            placeholderText={placeholder}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default DateComponent;