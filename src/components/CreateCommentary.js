import React from "react";
import { Button, Card, Container, Form, Image, Row } from "react-bootstrap";
import star from '../assets/star.png'
const CreateCommentary = () => {
  return (
    <Container className="p-3">
      <Card className="d-flex flex-column">
        <Form className="d-flex flex-column p-2 mt-auto">
          <Form.Label style={{ fontSize: 36 }}>
            У вас есть этот товар? Оставьте отзыв!
          </Form.Label>
          <Form.Control
            placeholder="Ваш отзыв..."
            as="textarea"
            style={{ height: "150px" }}
          />
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-center">
            <Form.Control as="select" style={{ width: "auto" }}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              
            </Form.Control>
            <Image src={star} style={{height:'1.5rem'}} className="ml-2"/>
            </div>
            <Button variant={"outline-success"} className="m-2 ml-4">
              Отправить
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default CreateCommentary;
