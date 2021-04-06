import React, { useEffect, useState } from 'react';
import { Col, Image, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import star from "../assets/star.png";
import { getOneDevice } from '../http/deviceAPI';

const DetailedDevice = () => {
  const [device, setDevice] = useState({info: []})
  const {id} = useParams()
  
    useEffect(
      ()=>{
        getOneDevice(id).then(data=>setDevice(data))
      }, []
    )
    return (
        <>
        {console.log(process.env.REACT_APP_API_URL + device.img)}
          <Row>
        <Col md={4}>
          <Image src={process.env.REACT_APP_API_URL + device.img} 
          width={300} height={300} />
        </Col>
        <Col md={8} className="d-flex flex-column justify-content-between">
          <div>
            <div style={{ fontSize: 32 }}>{device.name}</div>
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
            <div>{device.price}P</div>
            <div className="d-flex align-items-center">
              {device.rating}
              <Image src={star} height={24} />
            </div>
          </Row>
        </Col>
      </Row>  
        </>
    );
};

export default DetailedDevice;