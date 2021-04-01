import React from 'react';
import { Col, Image, Row } from "react-bootstrap";
import star from "../assets/star.png";

const DetailedDevice = ({deviceData}) => {
    return (
        <>
          <Row>
        <Col md={4}>
          <Image src={deviceData.img} width={300} height={300} />
        </Col>
        <Col md={8} className="d-flex flex-column justify-content-between">
          <div>
            <div style={{ fontSize: 32 }}>{deviceData.name}</div>
            <p>
              Описание ipsum dolor sit amet, consectetur adipiscing elit. Nam
              pretium semper justo et commodo. In sed condimentum diam. Nulla
              maximus nunc ac dui sodales ultrices. Curabitur cursus blandit
              tortor eget rutrum. Sed nibh eros, pretium id interdum in,
              molestie tempor est. Etiam lacinia dignissim ipsum, in condimentum
              lacus rhoncus quis.
            </p>
          </div>
          <Row
            className="d-flex justify-content-between align-items-center pr-3"
            style={{ fontSize: 24 }}
          >
            <div>{deviceData.price}P</div>
            <div className="d-flex align-items-center">
              {deviceData.rating}
              <Image src={star} height={24} />
            </div>
          </Row>
        </Col>
      </Row>  
        </>
    );
};

export default DetailedDevice;