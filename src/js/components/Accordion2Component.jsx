const AccordionComponent2 = () => {
  return (
    <div class="accordion accordion-flush" id="accordionB">

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseD">
            This is the first Item but in the other Accordion
          </button>
        </h2>
        <div id="collapseD" class="accordion-collapse collapse" data-bs-parent="#accordionB">
          <div class="accordion-body">Just a demos.</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseE">
            This is the first Item but in the other Accordion
          </button>
        </h2>
        <div id="collapseE" class="accordion-collapse collapse" data-bs-parent="#accordionB">
          <div class="accordion-body">Just a demos.</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseF">
            This is the first Item but in the other Accordion
          </button>
        </h2>
        <div id="collapseF" class="accordion-collapse collapse" data-bs-parent="#accordionB">
          <div class="accordion-body">Just a demos.</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent2;