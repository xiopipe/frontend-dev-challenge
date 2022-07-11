import React, { Fragment, useState } from "react";
import { Container, Col } from "react-bootstrap";
export function Testimony() {
  const sliderData = [
    {
      id: 0,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat pariatur repellat 
      voluptate odio laudantium suscipit harum, accusantium debitis ducimus dolore sequi, iusto ex. 
      Ratione ipsam maxime architecto rem recusandae cupiditate?`,
      name: "Maria Montesory",
    },
    {
      id: 1,
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat eligendi numquam vero ratione impedit, 
      recusandae deleniti esse, porro ut quisquam asperiores temporibus doloremque ad et ipsam sunt explicabo dolorum voluptate!`,
      name: "Jhon Doe",
      
    },
    {
      id: 2,
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut excepturi cumque sit quas similique voluptates 
      velit earum dolore facilis quisquam dicta impedit eum perspiciatis, hic aliquid. Reiciendis molestias ea impedit!`,
      name: "Jack Doe",
      
    },
  ];
  const [quoteData, setQuoteData] = useState(sliderData[0].text);
  const [nameData, setNameData] = useState(sliderData[0].name);

  const handleClick = (index) => {
    setQuoteData(sliderData[index].text);
    setNameData(sliderData[index].name);

  };
  return (
    <Fragment>
      <Container>
        <div className="testimony">
          <Col className="d-flex mx-auto" style={{ justifyContent: "center" }}>
            <span className="bi bi-quote testimony__quote"></span>
          </Col>
          <p className="testimony__text">{quoteData}</p>
          <p className="testimony__user">~{nameData}~</p>
        </div>
        <div className="slider">
        {sliderData.map((data, i) => (
          <div  key={i.toString()}>
            <i  className="bi bi-dot" onClick={() => handleClick(i)}></i>
          </div>
        ))}

        </div>
      </Container>
    </Fragment>
  );
}
