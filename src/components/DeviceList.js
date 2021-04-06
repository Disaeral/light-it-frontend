import { observer } from "mobx-react-lite";
import React from "react";
import { Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";
const DeviceList = observer(({ devices }) => {
  return (
    <Row className="d-flex">
      {devices.rows &&
        devices.rows.map((device) => {
          return <DeviceItem key={device.id} device={device} />;
        })}
    </Row>
  );
});
export default DeviceList;
