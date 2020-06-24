context("Actions", () => {
  beforeEach(() => {
    cy.visit("https://sorteio-ajax.000webhostapp.com/");
  });

  it("should add a new table row on click", () => {
    cy.get("#quantos").type(2);
    cy.get("#maximo").type(70);

    cy.get("#sortear").click();
    cy.get("tr").should("have.length", 1);

    cy.get("#sortear").click();
    cy.get("tr").should("have.length", 2);
  });
});
