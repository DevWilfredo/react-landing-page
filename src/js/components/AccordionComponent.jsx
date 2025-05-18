const AccordionComponent = () => {
  return (
    <div class="accordion accordion-flush" id="accordionA">
      
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseA">
            This is the first Item
          </button>
        </h2>
        <div id="collapseA" class="accordion-collapse collapse" data-bs-parent="#accordionA">
          <div class="accordion-body">Just a demos.</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseB">
            This is the second Item
          </button>
        </h2>
        <div id="collapseB" class="accordion-collapse collapse" data-bs-parent="#accordionA">
          <div class="accordion-body">Just a demos.</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseC">
            This is the third Item
          </button>
        </h2>
        <div id="collapseC" class="accordion-collapse collapse" data-bs-parent="#accordionA">
          <div class="accordion-body">Just a demos.</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;