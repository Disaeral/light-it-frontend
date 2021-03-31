import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {  SHOP_ROUTE } from "../utils/consts";
import { NavLink } from "react-router-dom";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import  Container from "react-bootstrap/Container";

export const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark" className="d-flex ">
      <Container>
        <NavLink to={SHOP_ROUTE} style={{ color: "#fff" }}>
          eKeks
        </NavLink>
        {user.isAuth ? (
          <Nav style={{ color: "#fff" }} className="ml-auto">
            <Button variant={"outline-light"}>На Главную</Button>
            <Button
              variant="light"
              onClick={() => user.setIsAuth(false)}
              className="ml-2"
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav style={{ color: "#fff" }} className="ml-auto">
            <Button variant={"outline-light"}>На Главную</Button>
            <Button
              variant={"outline-light"}
              onClick={() => user.setIsAuth(true)}
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
