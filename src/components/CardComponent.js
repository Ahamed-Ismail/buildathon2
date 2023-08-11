import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import agriimg from "../images/agritech.png";
import healthcare from "../images/healthcare.jpeg";
import industry5 from "../images/industry 5.jpg";
import "./cardComponent.css";

function CardComponent() {
  return (
    <div className="cards container space-around my-5">
      <Card style={{ width: "18rem" }} className="m-3">
        <Card.Img className="cardimg" variant="top" src={agriimg} />
        <Card.Body>
          <Card.Title>Agriculture</Card.Title>
          <Card.Text>
            Explore the future of farming and sustainability in our Agriculture
            theme. Dive into innovative solutions that bridge technology with
            agriculture to ensure food security, efficient resource utilization,
            and eco-friendly practices.
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }} className="m-3">
        <Card.Img className="cardimg" variant="top" src={healthcare}/>
        <Card.Body>
          <Card.Title>Healthcare</Card.Title>
          <Card.Text>
            Step into the realm of Healthcare innovation. Delve into
            cutting-edge technologies and ideas that revolutionize patient care,
            medical diagnostics, telemedicine, and overall well-being. Join us
            to shape the future of health.
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }} className="m-3">
        <Card.Img className="cardimg" variant="top" src={industry5} />
        <Card.Body>
          <Card.Title>Industry 5.0</Card.Title>
          <Card.Text>
            Uncover the evolution of industry with our Industry 5.0 theme. From
            smart manufacturing and automation to human-machine collaboration,
            this theme focuses on reshaping traditional industries and processes
            to build a more efficient and interconnected world.
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardComponent;
