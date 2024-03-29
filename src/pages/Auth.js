import React, { useContext, useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();
  const isLogin = useLocation().pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(user);
      user.setIsAuth(true);
      history.push(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card className="p-5" style={{ width: 600 }}>
        <h3 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h3>
        <Form className="d-flex flex-column">
          <Form.Control
            placeholder="Введите Email..."
            className="mt-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            placeholder="Введите пароль...."
            className="mt-4"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Row className="d-flex justify-content-between align-items-center mt-4 pl-3 pr-3">
            <Button variant={"info"} onClick={click}>
              {isLogin ? "Войти" : "Зарегистрироваться"}
            </Button>
            <div>
              {isLogin ? "Нет аккаунта?" : "Есть аккаунт?"}
              <NavLink to={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE}>
                {isLogin ? "Зарегистрируйтесь!" : "Войдите!"}
              </NavLink>
            </div>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
