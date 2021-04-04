import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {  LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { NavLink, useHistory } from "react-router-dom";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import  Container from "react-bootstrap/Container";

export const NavBar = observer(() => {
  
  const { user } = useContext(Context);
  const history = useHistory()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    localStorage.removeItem('token')
  }
  return (
    <Navbar bg="dark" variant="dark" className="d-flex ">
      <Container>
        <NavLink to={SHOP_ROUTE} style={{ color: "#fff" }}>
          eKeks
        </NavLink>
        {user.isAuth ? (
          <Nav style={{ color: "#fff" }} className="ml-auto">
            <Button variant={"outline-light"} onClick={()=>history.push(SHOP_ROUTE)}>На Главную</Button>
            <Button
              variant="light"
              onClick={() => logOut()}
              className="ml-2"
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav style={{ color: "#fff" }} className="ml-auto">
            <Button variant={"outline-light"} onClick={() => history.push(SHOP_ROUTE)}>На Главную</Button>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(LOGIN_ROUTE)}
              className="ml-2"
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});
