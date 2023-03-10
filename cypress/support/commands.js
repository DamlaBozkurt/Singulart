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
       
        cy.get('textarea[name="message"]').eq('1').click({force: true}).type('xv')
        cy.get('input[name="email"]').eq('1').click( {force: true}).type('xcvxcv')
        cy.get('button[type="submit"]').eq('4').click({force: true})
        cy.get('button[type="button"]').eq('25').click({force: true})
        cy.get('a[data-ga-l="scandinavian"]').eq('6').click({force: true})
        cy.get('a[title="Ida Table Walnut NEOstill"]').click({force: true})
        cy.get('button[class="ds-button ds-button--block mt-3 js-add-to-cart"]').click({force: true})
        cy.get('input[id="cart_info_email"]').click({force: true}).type('dams')
        cy.get('input[id="cart_info_lastName"]').click({force: true}).type('tony')   
        cy.get('input[id="cart_info_firstName"]').click({force: true}).type('bob')
        //cy.get('div[class="input-element phone"]')
        //cy.get('div[class="phone-dual"]')
        cy.get('div[id="cart_info_phone"]').click({force: true})
        cy.get('option[value="GB"]').contains('United Kingdom (+44)').click({force: true})
       
        //cy.get('select[id="cart_info_phone_country"]')
        //cy.get('div[class="form-inline"]')
        //cy.get('select[id="cart_info_phone_country"]').select('Italy').click({force: true})
        //cy.get('[value="IT"]').eq('1').click({force: true}) //.select('IT').should('have.value', 'IT')
        //cy.get('select[id="cart_info_phone_country"]').select('ES').eq('1').should('have.value', 'Spain (+34)')
        
        //cy.get('input[type="checkbox"]').eq('0').click( {force: true})
        //cy.get('input[type="password"]').eq('1').click({force: true}).type('dsd')
        //cy.get('input[type="checkbox"]').eq('1').click({force: true})
        //cy.get('button[id="cta-step-1"]').click({force: true})
    })
    Cypress.Commands.add('awards', (awards) => {
        cy.get('img[src="https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/logos/logo-colors-line-new-header-black-bg.49009f76.svg"]').click()
        //cy.get('a[href="/en/awards/results-2023"]').eq('0').click({force: true})
        //cy.get('a[class="ds-button awards-editorial-winner__editorial-cta"]').eq('0').click( {force: true})
        //cy.get('a[href="/en/artworks/ovidiu-kloska-framed-beautiful-strange-spontaneous-vibrating-lines-enigmatic-still-life-by-o-kloska-1783803"]').eq('0').click({force: true})
        
        cy.get('div[class="languages js-languages"]')
        cy.get('button[class="btn btn-default dropdown-toggle"]').eq('0').click({force: true})
        cy.get('ul[role="menu"]').eq('0').click({force: true})
        cy.get('li[role="presentation"]').eq('1').click({force: true})
        cy.get('span[data-href="/de/?setlocale=1"]').eq('0').click({force: true})
    })  
        Cypress.Commands.add('Contact', (contactUs) => {
        cy.get('a[class="gen-contact"]').eq('0').click()
        cy.get('input[id="generic_email"]').click({force: true}).type('lskvnlkv')  
        cy.get('div[class="form-group"]')
        cy.get('select[id="generic_genericContactType"]').select("purchase").should('have.value', 'Im interested in purchasing a new piece')
    })
        Cypress.Commands.add('giftCard', (giftCard) => {
            cy.get('a[href="/en/giftcards"]').click({force: true})
            cy.get('a[class="button primary step-2"]').click({force: true})
            cy.get('input[type="date"]').click({force: true}).type('2023-03-04')
            cy.get('input[name="giftcards[deliveryFullName]"]').click({force: true}).type('Dams')
            cy.get('input[id="giftcards_recipientEmail"]').click({force: true}).type('xv')
            cy.get('input[id="giftcards_deliveryLine1"]').click({force: true}).type('??sd????sdl')
            cy.get('input[id="giftcards_deliveryLine2"]').click({force: true}).type('x??xcvmx')
            cy.get('input[id="giftcards_deliveryState"]').click({force: true}).type('kfkf')
            cy.get('input[id="giftcards_deliveryCity"]').click({force: true}).type('fdg??dfl')
            //cy.get('input[id="giftcards_deliveryZipcode"]').click({force: true}).type('sdfsd')
            cy.get('a[class="button primary step-3"]').click({force: true})
           // cy.get('input[id="giftcards_deliveryCountry"]').select('Argentina')
            //cy.get('input[id="giftcards_deliveryCountry"]').should('have.value', 'AR').click({force: true})

        })
        Cypress.Commands.add('Creators', (creators) => {
            //cy.get('a[data-ga-c="menu_artworks"]').eq('0').should('contain', 'Artworks').trigger('mouseover')
            cy.get('div[data-refresh="navigation-desktop-artworks"]').should('be.visible')
            cy.get('li[data-target="#navigation-desktop-creators"]').eq('0').should('be.visible').click({force: true})
            //CALISMADI
        })
        Cypress.Commands.add('trade', (trade) => {
            cy.get('a[href="/en/trade"]').eq('3').click({force: true})
            cy.get('button[type="button"]').eq('12').click({force: true})
            cy.get('input[name="business_application[firstName]"]').click().type('john')
            cy.get('input[name="business_application[email]"]').click().type('dnkvdn')
            cy.get('input[name="business_application[companyName]"]').click().type('sdsdf')
            cy.get('div[class="form-row trade-landing__form-row"]').eq('1')
            cy.get('div[class="ts-control form-field form-select__button--desktop js-form-select-button-desktop"]').eq('0').click()
            cy.get('div[data-value="FR"]').click()
            cy.get('div[class="ts-control form-field form-select__button--desktop js-form-select-button-desktop"]').eq(1).click({force: true})
            cy.get('div[data-value="FR"]').eq('1').click({force: true})
            cy.get('div[class="ts-control form-field form-select__button--desktop js-form-select-button-desktop"]').eq(3).click({force: true})
            cy.get('div[data-value="11-50"]').eq('0').click({force: true})
            cy.get('div[class="ts-control form-field form-select__button--desktop js-form-select-button-desktop"]').eq('4').click({force: true})
            cy.get('div[data-value="residential"]').eq('0').click({force: true})
            cy.get('button[type="submit"]').eq('2').click({force: true})
        })
            Cypress.Commands.add('loginForCreators', (Login) => {
                cy.get('a[href="/my-singulart/account/login"]').click()
                cy.get('input[id="username"]').click().type('sdfsd')
                cy.get('input[id="password"]').click().type('sdsdsdsdfsd')
                cy.get('button[id="submit"]').click()
                cy.get('a[href="/my-singulart/account/forgot_password"]').click()
                cy.get('input[id="email"]').click().type('34534')
                cy.get('button[id="submit"]').click()
            })
        

       