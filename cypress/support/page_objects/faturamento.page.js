class FaturamentoPage {

    editarDadosFaturamento() {
        cy.get('.checkout-button').click()
        cy.get('#billing_first_name').clear().type('Johge')
        cy.get('#billing_last_name').clear().type('Castelo')
        cy.get('#billing_company').clear().type('TopTop')
        //cy.get('#select2-billing_country-container').type('Brasil{enter}')
        cy.get('#billing_country').select('BR', { force: true })
        cy.get('#billing_address_1').clear().type('Rua Sete')
        cy.get('#billing_address_2').clear().type('Nº 1000')
        cy.get('#billing_city').clear().type('São Paulo' + '{enter}')
        //cy.get('#select2-billing_state-container').scrollTo('bottom', { ensureScrollable: false });
        cy.get('#select2-billing_state-container').click().type('Sergipe' + '{enter}')
        cy.get('#billing_postcode').clear().type('03000-070')
        cy.get('#billing_phone').clear().type('11993339776')
        cy.get('#billing_email').clear().type('fat@faturamento.com')
        cy.wait(200);
        cy.get('#terms').check()
        cy.wait(200);
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    }

}

export default new FaturamentoPage()