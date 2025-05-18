const AccordionComponent = ({items, index}) => {
  return (
    <div class="accordion accordion-flush" id={`accordion-${index}`}>
      {items.map((item, idx) => (
      <div class="accordion-item" key={idx}>
        <h2 class="accordion-header">

          <button 
          class="accordion-button collapsed" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target={`#collapse-${index}-${idx}`}
          >
          {item.title}
          </button>

        </h2>

        <div 
        id={`collapse-${index}-${idx}`} 
        class="accordion-collapse collapse" 
        data-bs-parent={`#accordion-${index}`}
        >
          <div class="accordion-body">{item.content}</div>
        </div>
      </div>
    ))}
    </div>
  );
};

export default AccordionComponent;
