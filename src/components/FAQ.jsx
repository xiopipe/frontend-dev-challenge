import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FAQAcordion } from "./FAQAcordion";
export function FAQ() {

    const faqAccordion = [
        {
            question: '¿Cuáles son los pasos para tomar una decisión?',
            answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Odio quibusdam sapiente maxime omnis, labore vel velit autem ipsa 
            doloribus eaque excepturi temporibus amet recusandae fuga necessitatibus iusto nisi nemo ad!`
        },
        {
            question: '¿Cuánto cuesta cada sesión?',
            answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Odio quibusdam sapiente maxime omnis, labore vel velit autem ipsa 
            doloribus eaque excepturi temporibus amet recusandae fuga necessitatibus iusto nisi nemo ad!`
        },
        {
            question: '¿Qué beneficios obtengo al afiliarme?',
            answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Odio quibusdam sapiente maxime omnis, labore vel velit autem ipsa 
            doloribus eaque excepturi temporibus amet recusandae fuga necessitatibus iusto nisi nemo ad!`
        },
        {
            question: '¿Cómo saber que plan le favorece a mi familia ?',
            answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit
            Odio quibusdam sapiente maxime omnis, labore vel velit autem ipsa 
           doloribus eaque excepturi temporibus amet recusandae fuga necessitatibus iusto nisi nemo ad!`
        },
        {
            question: '¿Dónde puedo cantactarme con ustedes?',
            answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit
            Odio quibusdam sapiente maxime omnis, labore vel velit autem ipsa 
           doloribus eaque excepturi temporibus amet recusandae fuga necessitatibus iusto nisi nemo ad!`
        }
        
    ]


  return (


    <Fragment>
      <Container className="FAQ">
        <Row>
          <Col md={6} sm={12}>
            <h4 id="slide3">Preguntas Frecuentes</h4>

            {faqAccordion.map(({question, answer}) => (
                <FAQAcordion key={question.toString()} question={question} answer={answer}></FAQAcordion>
            ))}

          </Col>
          <Col md={6} sm={12}>
            <img src="/images/info/FAQ.png" className="d-none d-md-block" alt="" />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
