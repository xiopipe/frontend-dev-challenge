import React, { Fragment, useState } from "react";

export function FAQAcordion({ question, answer }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Fragment>
      <div  onClick={() => setIsActive(!isActive)}>
        <div className="FAQ__question d-flex justify-content-between">{question}
        <i className="bi bi-chevron-down align-self-end"></i>
        </div>
      </div>
      <hr />
      {isActive && <div className="FAQ__answer">{answer}</div>}
      <span></span>
    </Fragment>
  );
}
