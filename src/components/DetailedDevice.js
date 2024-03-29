import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import star from "../assets/star.png";
import { getDeviceComments } from "../http/commentsAPI";
import { getOneDevice } from "../http/deviceAPI";

const DetailedDevice = () => {
  const [device, setDevice] = useState({});
  const [rating, setRating] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getOneDevice(id).then((data) => setDevice(data));
    getDeviceComments(id).then((data) =>
      setRating(
        (
          data
            .map((comment) => comment.rating)
            .reduce((acc, rate) => (acc += rate)) / data.length
        ).toFixed(2)
      )
    );
  }, []);
  return (
    <>
      <Row>
        <Col md={4}>
          <Image
            src={process.env.REACT_APP_API_URL + device.img}
            width={300}
            height={300}
          />
        </Col>
        <Col md={8} className="d-flex flex-column justify-content-between">
          <div>
            <div style={{ fontSize: 32 }}>{device.name}</div>
            <p>{device.text}</p>
          </div>
          <Row
            className="d-flex justify-content-between align-items-center pr-3"
            style={{ fontSize: 24 }}
          >
            <div>{device.price}P</div>
            <div className="d-flex align-items-center">
              {rating}
              <Image src={star} height={24} />
            </div>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default DetailedDevice;
