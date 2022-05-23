/// <reference types="Cypress" />

it('should test erroneous password creation flow', () => {
  cy.visit('');
  cy.get('h1').should('have.text', 'Cuenta Corriente OpenClose');
  cy.get('.button.next').should('be.disabled');
  cy.get('#data-consent--checkbox').click();
  cy.get('.button.next').should('not.be.disabled');
  cy.get('.button.next').click();
  cy.contains('También puedes crear una pista que te ayude a recordar tu contraseña maestra.').should('be.visible');
  cy.get('.button.next').should('be.disabled');
  cy.get('#password--input').type('pruebaKO123');
  cy.get('#password-repeat--input').type('pruebaKO123');
  cy.get('.button.next').should('not.be.disabled').click();
  cy.get('.loader').should('exist');
  cy.wait(3000).contains('Ha habido un error').should('be.visible');
  cy.get('.button.ko').click();
  cy.contains('Repite tu Contraseña Maestra').should('be.visible');
});
