class FaturamentoPage {

    editarDadosFaturamento() {
        cy.get('.checkout-button').click()
        cy.get('#billing_first_name').clear().type('João')
        cy.get('#billing_last_name').clear().type('Silva')
        cy.get('#billing_company').clear().type('Ebac')
        //cy.get('#select2-billing_country-container').type('Brasil{enter}')
        cy.get('#billing_country').select('BR', { force: true })
        cy.get('#billing_address_1').clear().type('Rua dos bobs')
        cy.get('#billing_address_2').clear().type('Nº 001')
        cy.get('#billing_city').clear().type('São Paulo' + '{enter}')
        //cy.get('#select2-billing_state-container').scrollTo('bottom', { ensureScrollable: false });
        cy.get('#select2-billing_state-container').click().type('São Paulo' + '{enter}')
        cy.get('#billing_postcode').clear().type('03000-010')
        cy.get('#billing_phone').clear().type('11999999776')
        cy.get('#billing_email').clear().type('email@qualquerum.com')
        cy.wait(200);
        cy.get('#terms').check()
        cy.wait(200);
        cy.get('#place_order').click()
    }

}

export default new FaturamentoPage()