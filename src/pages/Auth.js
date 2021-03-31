import React from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
    const isLogin = useLocation().pathname === '/login'
    
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card className="p-5" style={{ width: 600 }}>
        <h3 className="m-auto">{isLogin? "Авторизация":"Регистрация"}</h3>
        <Form className="d-flex flex-column">
          <Form.Control placeholder="Введите Email..." className="mt-4" />
          <Form.Control placeholder="Введите пароль...." className="mt-4" />
          <Row className="d-flex justify-content-between align-items-center mt-4 pl-3 pr-3">
            
            <Button variant={"info"}>{isLogin? "Войти": "Зарегистрироваться"}</Button>
            <div>
            {isLogin?"Нет аккаунта?":"Есть аккаунт?"} <NavLink to={isLogin?REGISTRATION_ROUTE:LOGIN_ROUTE}>{isLogin? "Зарегистрируйтесь!": "Войдите!"}</NavLink>
            </div>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
