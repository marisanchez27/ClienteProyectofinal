import React from "react";
import { Row, Col, Card } from "antd";
import {
  ClockCircleOutlined,
  KeyOutlined,
  UserOutlined,
  DollarCircleOutlined,
  GiftOutlined,
  MailOutlined
} from "@ant-design/icons";

import "./HowMyCoursesWork.scss";

export default function HowMyCoursesWork() {
  return (
    <Row className="how-my-courses-work">
      <Col lg={24} className="how-my-courses-work__title">
        <h2>¿Cómo funcionan?</h2>
        <h3>
          Tienda Online Cosas-Frikis,
          encontraras descuentos y obsequios por tus compras en linea.
        </h3>
      </Col>

      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              icon={<ClockCircleOutlined />}
              title="% Descuentos"
              description="Descuentos del 10%, 30%, 50% en compras superiores o iguales $100.000 en referencias seleccionadas."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon={<KeyOutlined />}
              title="Acceso 24/7"
              description="Accede a la tienda Online las 24 horas del dia y obten descuentos durante temporadas."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon={<MailOutlined />}
              title="Contactenos"
              description="frikisCosas@gmail.com Telefono: 608975474"
            />
          </Col>
        </Row>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              icon={<UserOutlined />}
              title="Referencias"
              description="Contamos con los mejores productos del mercado."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon={<DollarCircleOutlined />}
              title="Precios bajos"
              description="Obtén nuestros productos con los precios mas bajo del mercado."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon={< GiftOutlined  />}
              title="Obsequio"
              description="Al completar tu compra recibirás un obsequio que te expedirá en nuestra pagina."
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
    </Row>
  );
}

function CardInfo(props) {
  const { icon, title, description } = props;
  const { Meta } = Card;

  return (
    <Card className="how-my-courses-work__card">
     { icon }
      <Meta title={title} description={description} />
    </Card>
  );
}
