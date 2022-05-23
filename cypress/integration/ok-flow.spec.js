/// <reference types="Cypress" />

  it('should test successful password creation flow', () => {
    cy.visit('');
    cy.get('h1').should('have.text', 'Cuenta Corriente OpenClose');
    cy.get('.button.next').should('be.disabled');
    cy.get('#data-consent--checkbox').click();
    cy.get('.button.next').should('not.be.disabled');
    cy.get('.button.next').click();
    cy.contains('También puedes crear una pista que te ayude a recordar tu contraseña maestra.').should('be.visible');
    cy.get('#password--input').type('Hello-pass');
    cy.contains('Tiene que haber al menos 1 dígito y 1 mayúscula');
    cy.get('#password-repeat--input').type('Hello-pass1');
    cy.contains('Las contraseñas no coinciden');
    cy.get('.button.next').should('be.disabled');
    cy.get('#password--input').clear().type('Hello-pass1');
    cy.get('#password-repeat--input').clear().type('Hello-pass1');
    cy.get('.button.next').should('not.be.disabled').click();
    cy.get('.loader').should('exist');
    cy.wait(3000).contains('¡Tu Password Manager ya está creado!').should('be.visible');
  });

