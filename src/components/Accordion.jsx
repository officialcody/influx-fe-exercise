import Accordion from "react-bootstrap/Accordion";

const AccordionItem = ({ title, description, eventKey }) => {
  return (
    <Accordion.Item
      className="acc-item bg-black text-white border-dull"
      eventKey={eventKey}
    >
      <Accordion.Header className="fw-bold font3">{title}</Accordion.Header>
      <Accordion.Body className="font5">{description}</Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordionItem;
