import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "..";
import DeviceItem from "./DeviceItem";
const DeviceList = observer(({devices}) => {
  
  console.log(devices)
  return (
    <Row className="d-flex">
      {devices.rows && devices.rows.map((device) => {
        return (
          <DeviceItem
            key={device.id}
            device={device}
           
            
          />
        );
      })}
    </Row>
  );
});
export default DeviceList;
