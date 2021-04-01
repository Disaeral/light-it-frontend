import { observer } from "mobx-react-lite";
import React, {useContext} from "react";
import {  Container } from "react-bootstrap";
import { Context } from "..";
import Comments from "../components/Comments";
import DetailedDevice from "../components/DetailedDevice";
import CreateCommentary from "../components/CreateCommentary"

const DevicePage = observer(() => {
  const {user} = useContext(Context)
  const deviceData = {
    id: 9,
    name: "keke5",
    price: 94000,
    rating: 23,
    img:
      "https://cdn.discordapp.com/attachments/449223524209393696/816406855949615184/9e4e5196a429e8a8.png",
  }
  return (
    <Container className="mt-3">
      <DetailedDevice deviceData={deviceData} />
      <Comments />
      {user.isAuth && <CreateCommentary />}
    </Container>
  );
});

export default DevicePage;
