describe(`Test the Google`, { tags: "@Google" }, () => {
  beforeEach(() => {
    cy.visit("https://www.google.com/");
  });

  it("Doing a researchs", () => {
    cy.get("#APjFqb").type("cypress");

    cy.get(".aajZCb > .lJ9FBc > center > .gNO89b").click();
  });
});
