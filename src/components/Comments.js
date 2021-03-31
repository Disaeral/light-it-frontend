import React, { useContext } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router";
import { Context } from "..";
import Commentary from "./Commentary";

const Comments = () => {
    const id = +useLocation().pathname.slice(8)
  const {comments} = useContext(Context)
  const filteredComments = comments.comments.filter(commentary=>commentary.deviceId===id)
  return (
    <Container>
      <div style={{ fontSize: 32 }}>Отзывы</div>
      {filteredComments.length === 0 ? <p>Отзывов пока нет...</p>: null}
      {filteredComments.map((commentary) => (
          
        <Commentary
          id={commentary.id}
          rate={commentary.rate}
          text={commentary.text}
          userId={commentary.userId}
          deviceId={commentary.deviceId}
        /> 
      ))}
    </Container>
  );
};

export default Comments;
