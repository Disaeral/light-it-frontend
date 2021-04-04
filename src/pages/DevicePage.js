import { observer } from "mobx-react-lite";
import React, {useContext} from "react";
import {  Container } from "react-bootstrap";
import { Context } from "..";
import Comments from "../components/Comments";
import DetailedDevice from "../components/DetailedDevice";
import CreateCommentary from "../components/CreateCommentary"
const DevicePage = observer(() => {
  const {user} = useContext(Context)
 
  return (
    <Container className="mt-3">
      <DetailedDevice />
      <Comments />
      {user.isAuth && <CreateCommentary />}
    </Container>
  );
});

export default DevicePage;
