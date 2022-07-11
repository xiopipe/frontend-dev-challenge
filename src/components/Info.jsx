import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

export function Info() {
  return (
    <Fragment>
      <Container style={{paddingTop:'8px'}}>
        <Row className="info">
          <Col  md={6} sm={12}>
            <img
              className="d-flex mx-auto " 
              src="/images/info/Professional.png"
              alt=""
            />
            <h4>Nuestros Profesionales</h4>
            <div  className="info__text d-flex mx-auto">
              <p >
                Nuestro equipo de de trabajo está conformado por mas de 500
                profesionales alrededor del mundo
              </p>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <img
              className="d-flex mx-auto "
              src="/images/info/Online.png"
              alt=""
            />
            <h4>A un Solo Click de distancia</h4>
            <div className=" info__text d-flex mx-auto">
              <p>
                Podrás Acceder a tu cita online en cualquier momento y en
                cualquier lugar con nuestra modalidad a distancia
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
