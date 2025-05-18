const AccordionComponent = ({ items, index }) => {
  return (
    <div className="accordion accordion-flush" id={`accordion-${index}`}>
      {items.map((item, idx) => (
        <div className="accordion-item" key={idx}>
          <h2 className="accordion-header">

            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}-${idx}`}
            >
              {item.title}
            </button>

          </h2>

          <div
            id={`collapse-${index}-${idx}`}
            className="accordion-collapse collapse"
            data-bs-parent={`#accordion-${index}`}
          >
            <div className="accordion-body">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionComponent;
