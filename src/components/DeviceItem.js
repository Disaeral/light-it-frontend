import React from 'react';
import {Card, Col, Image} from 'react-bootstrap'
import { useHistory } from 'react-router';
import star from '../assets/star.png'
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {
    const history = useHistory()
    return (

        <Col md={2} className="mt-3" onClick={()=>history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, height: 206, cursor:'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="d-flex justify-content-between align-items-center ">
                    <div>{device.name}</div>
                                   
                <div className="d-flex align-items-center flex-column">
                <div>{device.price}P</div>
                <div className="d-flex align-items-center align-self-end">
                    <div>{device.rating}</div>
                    <Image src={star} height={16} width={16}/>
                    </div>
                </div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;