import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';

const CreateCommentary = () => {
    return (
        <Container className="p-3">
            <Card className="d-flex flex-column">
                
                <Form className="d-flex flex-column p-2 mt-auto">
                    <Form.Label style={{fontSize: 36}}>У вас есть этот товар? Оставьте отзыв!</Form.Label>
                    <Form.Control placeholder="Ваш отзыв..."  as="textarea" style={{height: "150px"}}/>
                    <Button variant={"outline-success"} className="align-self-end mt-2">Отправить</Button>
                </Form>
            </Card>
        </Container>
    );
};

export default CreateCommentary;