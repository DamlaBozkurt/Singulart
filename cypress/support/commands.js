Cypress.Commands.add('Paintings', (paintings) => {
    cy.get('a[href="/en/painting"]').eq('0').click()
    //cy.get('div[class="carousel__list js-carousel-list"]')
    //cy.get('a[class="artwork-item__link link--block js-track-artwork-link"]').eq('15').click({force: true})
    //cy.get('a[href="/en/painting"]').eq('0').click()
    //cy.get('a[class="artwork-item__link link--block js-track-artwork-link"]').eq('61').click( {force: true})
    cy.get('input[class="form-radio-option__input js-radio-list-option-input"]').eq('1').click({force: true})
    cy.get('div[class="searchV2 search-results__panel hidden-sm hidden-xs js-filters-panel"]').click()
    cy.get('button[class="form-radio-list__show-more-button js-radio-list-show-more body--small-accent"]').eq('0').click({force: true})
    cy.get('input[id="category-nature"]').click( {force: true})
    cy.get('input[class="form-buttons-list__input js-button"]').eq('0').click( {force: true})
    cy.get('button[style="background-color:#FE2712"]').click()
    //cy.get('a[class="artwork-item__link link--block js-track-artwork-link"]').eq('0').click({force: true})
    cy.get('input[id="style-impressionism"]').click({force: true})
    cy.get('div[class="form-dropdown__select bootstrap-select"]').eq('0').click({force: true})
    cy.get('span[class="bs-caret"]').eq('0').click({force: true})
   

    })
    Cypress.Commands.add('slider', (slider) => {
        const currentValue  = 0;
  const targetValue = 35000;
  const increment = 500;
  const steps = (targetValue - currentValue) / increment;
  const arrows = '{rightarrow}'.repeat(steps)
  cy.get('a[href="/en/painting"]').eq('0').click()
  cy.get('span[class="accordion__title font-label"]').eq('4').click({force: true})
  cy.get('div[id="search-filter-price"]')
  //cy.get('div[class="slider-handle min-slider-handle round"]').eq('0').invoke('val', 100).trigger({force: true})
  //cy.get(".slider-handle min-slider-handle round").eq('0').invoke("val", 300).trigger("change").click({ force: true })
  cy.get('div[class="accordion__panel"]').eq('2').click( {force: true})
  //cy.get('div[class="slider-handle min-slider-handle round"]').eq('0').invoke('val', 1).trigger('change')
  //cy.get('input[class="form-radio-option__input js-radio-list-option-input"]').eq('1').click({force: true})
  cy.get('div[class="slider-handle min-slider-handle round"]').eq('0').should('have.attr', 'aria-valuenow','0').type(arrows).click('{force: true}')

  cy.get('div[class="slider-handle min-slider-handle round"]').eq('0').should('have.attr', 'aria-valuenow', '100').click('{force: true}')
    })

    Cypress.Commands.add('designFurniture', (furniture) => {

        cy.get('img[src="https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/logos/logo-colors-line-new-header-black-bg.49009f76.svg"]').click()
        cy.get('a[href="/en/our-designs"]').eq('0').click()
        cy.get('a[href="/en/artworks/maria-r%C3%A4sta-chick-1690441"]').click({force: true})
        cy.get('button[class="carousel-with-thumbs__thumb js-carousel-with-thumbs-thumb active"]').click({force: true})
        cy.get('button[data-carousel-thumb="1"]').click({force: true})
        
        cy.get('button[type="button"]').eq('21').click( {force: true})
        cy.get('input[type="email"]').eq('1').click({force: true}).type('rgs')
        //cy.get('textarea[name="message"]').eq('0').click( {force: true}).type('fgdgdgd')
        //cy.get('div[class="text-center"]').click({force: true})
        
    })