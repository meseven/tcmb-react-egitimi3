describe("tests", () => {
  before(() => {
    cy.visit("http://localhost:5173");
    cy.intercept("GET", "**/users", { fixture: "users" }).as("users");
  });

  it("Başlangıçta kullanıcı sayısı 0 olmalı", () => {
    cy.wait("@users").then((interception) => {
      const data = interception.response.body;

      cy.get("[data-cy=total-user]").should("have.text", data.length);
      cy.get("[data-cy=title]").should("have.text", "Users");
      // cy.get("[data-cy=empty-list]").should("exist");
    });
  });

  it("Form doldurulup gönderildiğinde listeye yeni eleman eklenmeli", () => {
    cy.get("[data-cy=username-input]").type("Ahmet");
    cy.get("[data-cy=form]").submit();
    cy.get("[data-cy=total-user]").should("have.text", 11);
    cy.get("[data-cy=empty-list]").should("not.exist");
    cy.get("[data-cy=user-list]").children().should("have.length", 11);
  });

  it("Bir eleman silindiğinde listeden kaldırılmalı", () => {
    cy.get("[data-cy=user-list] div").first().children(".delete-btn").click();
    cy.get("[data-cy=total-user]").should("have.text", "10");
    // cy.get("[data-cy=empty-list]").should("exist");
  });
});
