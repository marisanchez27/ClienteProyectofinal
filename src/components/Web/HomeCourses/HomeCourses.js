import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import coco from "../../../assets/img/png/coco.png";
import fantasma from "../../../assets/img/png/fantasma.png";
import jocker from "../../../assets/img/png/jocker.png";
import moe from "../../../assets/img/png/moe.png";
import vaso from "../../../assets/img/png/vaso.png";
import sombrilla from "../../../assets/img/png/sombrilla.png";

import "./HomeCourses.scss";

export default function HomeCourses() {
  return (
    <Row className="home-courses">
      <Col lg={24} className="home-courses__title">
        <h3>Compra y Regala nuetros mejores productos</h3>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={coco}
              title="Funko-Pop"
              subtitle="Funko Pop! Figura De Acción De Pelicula De Disney Coco 
              $507.900"
              link="https://articulo.mercadolibre.com.co/MCO-601768703-funko-pop-figura-de-accion-de-pelicula-de-disney-coco-_JM#position=7&search_layout=stack&type=item&tracking_id=53603d0b-a2a8-41ad-a063-9aa0a0b5707b"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={fantasma}
              title="Alcancía "
              subtitle="Alcancía No Face Man Hombre Sin Cara Viaje De Chihiro 
              $95.000"
              link="https://articulo.mercadolibre.com.co/MCO-592258380-alcancia-no-face-man-hombre-sin-cara-viaje-de-chihiro-_JM#position=1&search_layout=stack&type=item&tracking_id=e06e7e80-8d7f-4d69-91c9-bf66bc7fa895"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={jocker}
              title="Jocker Funko-Pop"
              subtitle="Jocker Figura Funko Pop $120.000"
              link="https://articulo.mercadolibre.com.co/MCO-816513496-jocker-figura-funko-pop-_JM#position=29&search_layout=stack&type=item&tracking_id=b9acfcde-5109-49d3-afda-84cf8b2b30d0"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={moe}
              title="Funko Pop Moe"
              subtitle="Funko Pop Moe Szyslak The Simpsons Funko Oficial
              $69.900"
              link="https://articulo.mercadolibre.com.co/MCO-563221075-funko-pop-moe-szyslak-500-the-simpsons-funko-oficial-_JM#position=2&search_layout=stack&type=item&tracking_id=d41a9f6f-912d-4ec4-887a-4976ad0b87c8"
            />
          </Col>
        </Row>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={vaso}
              title="Mug Gamers"
              subtitle="Mug Gamers Playstation Hogar Decoración
              $34.600"
              link="https://click1.mercadolibre.com.co/mclics/clicks/external/MCO/count?a=xjIycEKTOpLeZatqpk8QwdA1ncn9puc7yPaXa0CNaw8WzkDyESoIzzJnqBYWtIkLEEFT1OEzd9KqSpM6A0MUDKVTYtWTh59VDMYle74ndmQeFm3CLNRBZtCto%2BRsUsmTENRJIcR%2FsW6ZHkPTrDOLgQfE%2B5%2FxOlzd3xF8oCVRkzi8NT4o1kkBg8hCT0eFLXQrV8zCbGwxodmpXZiEEoTVy8IFjK89DJsbMsmdaGOKfDGL5hiQi8LmX758ODjO8bLXd%2BSUBnM8ZOOiJtYIp03UNRYAb5X9kIzi2XE2nd8gnXzlZN03kCoj89Oip5bZpFVbZN%2BfUiVs3ChyD2twX9O%2Fy43V2LagKFyWTS3IHpRBYpj9EWO4IvOp7nA7fQtFq5cpJ%2BpTLbBPnpqfSUy6XKm2GyEM9Lvc58TWyxJQQtShZahNPdwQJN3LtSHHm%2FGOD535ACg2yhzN2yERdILhk5ywePjT4mYT9aLoLSDdvNoSddUuYvv5hy72jqRk518zuw%2Bsor%2Fraimk3eCqUEE4C1OH7VAumT14zwhR5p7JYHhlSCdTPv6zEhhJsX5Hhod%2F4KUogDm5pvf%2FE%2Btdmj6omxCtKW10rthW62PQvakH7yB4TDxfYi589DNtSeTzqWzJp9pN4scJvpu0RJ86ZesK8NI5%2BELlaT%2FSwiNpmEiQo9FG5nMynvg6Yy7k9zVa25nKQLVpEHj4PB6Rckd85OWh7OZsvlE0hOl1iR%2BdKH4%2BV%2FFP%2FrdPg%2B6MXk0gxp%2BxGYnm0npQkPTLd2Mmraz8yANIptoB9qdwqZzfblK09gVl7enxwD8dXk1CnwNyA4DHGAiWcUGAAOtRFMcaN4AOaeP0tDy%2BhR6h5SgyqoSUirewGvBu78DFbBu7Ss1aa889ZVJX3S6b0aV9PiQRb35nk7XbXiPLDLbDVWlyYcRSjRX1%2FX3dka5Lm3Kf%2F7WbjMK%2FPlnqqzNDFQZtdMd7mDFqS217MZZB1m18%2F9pkgR%2BSf1wVWGy2H941kCOgSFZdG3X%2FLIfd%2FP4q5w%2F0u9c00Kuh%2BwzJKNPJz%2B5MvrLUYbG9f7vJ2qI9RCyvGwHYm8NEPOAWwnbGtsbzEzGnxe7vGB7yZI7RJkuipEMLbYHbyIT5%2BYGrp%2FeVpGeSLRtC6bSPWJMtPi7YpFwRK3AFQTs1vZdWl0iF24bc69Xd2jnEbPF%2Bg98nQND%2FRm64OvYPwNDWkQlik56pVUoVvgOc26HcYKtQHk5qTcyxpsFH3ZC01FjKZ%2BXuzZvihb6YSrzRcEWKkcHMylWylB9EeaZY4mE8K86mNWmAg5ceUmnB3a6YxCQWMqH4fDALyV24LzyKHLxsvz7BySCxCEN4OB0RskOYVE4GPcs2CCeH0mjv9bynWNCRA%2BgaPuztdKDwSQ728%2FWa0tUEDg28VA7SybsaYzFu1rOI06FCWotBNRKEl9uU5fLG3LWBxdvqvxmoLHvGxfBsp%2FZTZ2xfRnWBzb6%2Bca4LaiYTJpwFO6%2BAOd2BJ%2BBlXeJMblrhIrihkn6l76X8tJT4jXj88K7dO6J3JGasYsLMxwW2EpRkAPTNXRGazvZnZJ%2Bbf%2BCZz2oRXsHN3cMDtSguj%2BzFYy9Fq2uK3OW76In9Wqjp45MEsMoIJ4NOXmZNTtwvF1O9IGwY8rfU1%2FaZ4tPmiTd5jTxw8ajY7W5XRCMc2bDJaqRLjcRtbYUKSSrhbBt1aUQ%2F2dF4GVmSI62FLF2nM69AS%2Bstv6buq%2FA%2FOoOaI3iHil3T2VtvsiouPrjAQ8wjEpEzFdCImQiskzHaQ77zYEsRuez2wBPnhKY400U60fshvVqYbnVtuWrf58cmqcESo5%2FaLsBxqA9HO9qdvBOO8%2FXols%2BwEdaj4aFGFRNBhnu%2B7v23LgZiUJiCp6lYzbKhg4ROS02ZbrAlmduTjUhTTd%2F2u8SIq%2FQK7D4N0QgUSaRYRWofGpJFTTw%3D"
            />
          </Col>
          <Col md={6} />
          <Col md={6} />
          <Col md={6}>
            <CardCourse
              image={sombrilla}
              title="Starwars Sombrilla"
              subtitle="Starwars Sombrilla Paraguas Sable De Luz 7 Color Leds
              $194.900"
              link="https://articulo.mercadolibre.com.co/MCO-515823740-starwars-sombrilla-paraguas-sable-de-luz-7-color-leds-_JM#position=32&search_layout=stack&type=item&tracking_id=0178995a-dd74-4220-b76d-725cc73e1e65"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
      <Col lg={24} className="home-courses__more">
        <Link to="/courses">
          <Button>Ver más</Button>
        </Link>
      </Col>
    </Row>
  );
}

function CardCourse(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card
        className="home-courses__card"
        cover={<img src={image} alt={title} />}
        actions={[<Button>INGRESAR</Button>]}
      >
        <Meta title={title} description={subtitle} />
      </Card>
    </a>
  );
}
