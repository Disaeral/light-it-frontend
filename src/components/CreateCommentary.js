import React, { useContext, useState } from "react";
import { Button, Card, Container, Form, Image } from "react-bootstrap";
import star from "../assets/star.png";
import { useParams } from "react-router-dom";
import { createComment, getDeviceComments } from "../http/commentsAPI";
import jwt_decode from "jwt-decode";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const CreateCommentary = observer(() => {
  const { id } = useParams();
  console.log(id)
  const [text, setText] = useState("");
  const [stars, setStars] = useState(1);
  const { comments } = useContext(Context);
  const create = (text, stars) => {
    const comment = new FormData();
    comment.append("text", text);
    comment.append("rating", stars);
    comment.append("deviceId", id);
    comment.append("userId", jwt_decode(localStorage.getItem("token")).id);
    createComment(id, comment)
      .then(() => {
        getDeviceComments(id).then((data) => comments.setDeviceComments(data));
      })
      .then(() => {
        setText("");
        setStars(1);
      });
  };
  return (
    <Container className="p-3">
      <Card className="d-flex flex-column">
        <Form className="d-flex flex-column p-2 mt-auto">
          <Form.Label style={{ fontSize: 36 }}>
            У вас есть этот товар? Оставьте отзыв!
          </Form.Label>
          <Form.Control
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Ваш отзыв..."
            as="textarea"
            style={{ height: "150px" }}
          />
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-center">
              <Form.Control
                as="select"
                style={{ width: "auto" }}
                value={stars}
                onChange={(e) => setStars(e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
              <Image src={star} style={{ height: "1.5rem" }} className="ml-2" />
            </div>
            <Button
              variant={"outline-success"}
              className="m-2 ml-4"
              onClick={() => {
                create(text, stars);
              }}
            >
              Отправить
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
});

export default CreateCommentary;
