import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import star from '../assets/star.png'
import Comments from "../components/Comments";


const DevicePage = () => {
  const device = {
    id: 1,
    name: "Iphenk2 13 pro100",
    price: 144000,
    rating: 5,
    img:
      "https://cdn.discordapp.com/attachments/449223524209393696/816406854233489489/dBoPoVM42AE.png",
  };
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image src={device.img} width={300} height={300} />
        </Col>
        <Col md={8} className="d-flex flex-column justify-content-between">
          
          <div>
          <div style={{fontSize: 32}}>{device.name}</div>
          <p>
            Описание ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pretium semper justo et commodo. In sed condimentum diam. Nulla
            maximus nunc ac dui sodales ultrices. Curabitur cursus blandit
            tortor eget rutrum. Sed nibh eros, pretium id interdum in, molestie
            tempor est. Etiam lacinia dignissim ipsum, in condimentum lacus
            rhoncus quis.
            </p>
          </div>
          <Row className="d-flex justify-content-between align-items-center pr-3" style={{fontSize: 24}}>
              <div >{device.price}P</div>
              <div className="d-flex align-items-center">{device.rating}<Image src={star} height={24} /></div>
          </Row>
        </Col>
      </Row>
      <Comments />
    </Container>
  );
};

export default DevicePage;
