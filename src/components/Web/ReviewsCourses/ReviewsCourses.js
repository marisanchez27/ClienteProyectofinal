import React from "react";
import { Row, Col, Card, Avatar } from "antd";
import NoAvatar from "../../../assets/img/png/no-avatar.png";
import dog from "../../../assets/img/jpg/dog.jpg";
import Logo from "../../../assets/img/jpg/Logo.jpg";


import "./ReviewsCourses.scss";

export default function ReviewsCourses() {
  return (
    
      <Row className="reviews-courses">
        <Row>
          <Col lg={4} />
          <Col lg={16} className="reviews-courses__title">
            <h2>
              Forma parte de los miles de usuarios que hacen parte en nuestra
              tienda, y tienen la mejor experiencia en nuestro sitio web.
            </h2>
          </Col>
          <Col lg={4} />
        </Row>
        <div class="container" marginLeft="100%" marginRight="100%">
          <Row>
            <Col lg={8} />
              <Col lg={16}>
                <Row className="row-cards">
                  <Col md={8}>
                    <CardReview
                      name="Juan Rodriguez"
                      subtitle="usuario"
                      avatar={Logo}
                      review="Excelentes productos!!"
                    />
                  </Col>
                  <Col md={8}>
                    <CardReview
                      name="kelly Alzate"
                      subtitle="usuario"
                      avatar={Logo}
                      review="Los mejores descuentos."
                    />
                  </Col>
                  <Col md={8}>
                    <CardReview
                      name="Jhoan Rubio"
                      subtitle="usuario"
                      avatar={dog}
                      review="Los productos llegan igual a la imagen "
                    />
                  </Col>
                </Row>
                <Row className="row-cards">
                  <Col md={8}>
                    <CardReview
                      name="Ana Moreno"
                      subtitle="usuario"
                      avatar={NoAvatar}
                      review="Amo sus productos"
                    />
                  </Col>
                  <Col md={8}>
                    <CardReview
                      name="Jesús Cruz"
                      subtitle="usuario"
                      avatar={NoAvatar}
                      review="lo Mejor"
                    />
                  </Col>
                  <Col md={8}>
                    <CardReview
                      name="pepe Garcia"
                      subtitle="usuario"
                      avatar={NoAvatar}
                      review="Te ayudan con las dudas, respecto a los productos."
                    />
                  </Col>
                </Row>
              </Col>
            <Col lg={4} />
          </Row>
        </div>
      </Row>
    
  );
}

function CardReview(props) {
  const { name, subtitle, avatar, review } = props;
  const { Meta } = Card;

  return (
    <Card className="reviews-courses__card">
      <p>{review}</p>
      <Meta
        avatar={<Avatar src={avatar} />}
        title={name}
        description={subtitle}
      />
    </Card>
  );
}
