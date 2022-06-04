/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Row, Col } from "antd";
import {
  GiftOutlined,
  PhoneOutlined,
  MessageOutlined,
  RightOutlined,
  HddOutlined,
  AppstoreAddOutlined,
  UserOutlined,
  AlignRightOutlined
} from "@ant-design/icons";


import "./NavigationFooter.scss";

export default function NavigationFooter() {
  return (
    <Row className="navigation-footer">
      <Col>
        <h3>Navegación</h3>
      </Col>
      <Col md={12}>
        <RenderListLeft />
      </Col>
      <Col md={12}>
        <RenderListRight />
      </Col>
    </Row>
  );
}

function RenderListLeft() {
  return (
    <Row className="renderleft">
    <ul>
      <li>
        <a href="#">
          <br></br>
          <br></br>
        < GiftOutlined />Obsequios
        </a>
      </li>
      <li>
        <a href="#">
        < PhoneOutlined />Contactenos
        </a>
      </li>
      <li>
        <a href="#">
        <MessageOutlined />Escribenos
        </a>
      </li>
      <li>
        <a href="#">
          <RightOutlined />Politicas de Privacidad
        </a>
      </li>
    </ul>
    </Row>
  );
}

function RenderListRight() {
  return (
    <ul>
      <li>
        <a href="#">
          <HddOutlined /> Sistemas / Servidores
        </a>
      </li>
      <li>
        <a href="#">
          <AppstoreAddOutlined /> CMS
        </a>
      </li>
      <li>
        <a href="#">
        <UserOutlined /> Porfolio
        </a>
      </li>
      <li>
        <a href="#">
        <AlignRightOutlined /> Política de Cookies
        </a>
      </li>
    </ul>
  );
}
