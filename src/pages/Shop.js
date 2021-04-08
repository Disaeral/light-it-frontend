import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Context } from "..";
import DeviceList from "../components/DeviceList";
import { getDevices } from "../http/deviceAPI";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(()=>{
        getDevices().then(data=>device.setDevices(data))
    }, [])
  return (
    
    <Container className="pt-3">
      {console.log(device.devices)}
      <DeviceList devices={device.devices.rows}/>
    </Container>
  );
});

export default Shop;
