import React from "react";
import uidata from "../uidata.json";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "./Accordion";

const FAQ = () => {
  return (
    <div className="container-fluid bg-black">
      <div className="row justify-content-center py-lg-5 py-3">
        <div className="col col-lg-8 col-12">
          <h3 className="px-5 pb-4 pt-5 border-lg-bottom border-secondary text-white">
            Freqently Asked Questions
          </h3>
          <Accordion defaultActiveKey={0}>
            {uidata &&
              uidata?.frequentlyAskedQuestions.map((faq, index) => (
                <AccordionItem
                  key={`acc_${index}`}
                  eventKey={index}
                  title={faq.title}
                  description={faq.description}
                />
              ))}
          </Accordion>
        </div>
      </div>
      <div className="d-lg-none d-block row justify-content-center pt-1 px-4 pb-5">
        <button className="btn btn-danger text-white col col-12 font3 fw-bold">
          Get started
        </button>
        <div className="font5 dull-color extrasmall col col-12 py-2 text-center">
          Marcus MVP is only available for use in our Mobile App.
        </div>
      </div>
    </div>
  );
};

export default FAQ;
