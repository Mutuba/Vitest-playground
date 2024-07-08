import React, { useState } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};
const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [show, setShow] = useState(false);
  const onAccordionClick = () => {
    setShow(!show);
  };
  return (
    <div className="accordion">
      <h3 className="accordion-title">{title}</h3>
      <button onClick={() => onAccordionClick()}>
        {!show ? "Show" : "Hide"}
      </button>
      {show && <div>{children}</div>}
    </div>
  );
};

export default Accordion;
