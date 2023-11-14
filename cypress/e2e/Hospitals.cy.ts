describe("Index Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display video and play by default", () => {
    cy.get("video").should("be.visible");
    cy.get("video").should("have.prop", "paused", false);
  });

  it("should pause the video after clicking the pause button", () => {
    cy.wait(5000);
    cy.get("#video-action-button").click();
    cy.get("video").should("have.prop", "paused", true);
  });

  it("should navigate to /hospital after clicking the banner button", () => {
    cy.get("#banner-button").click();
    cy.url().should("include", "/hospital");
  });
});

describe("Hospital Page", () => {
  beforeEach(() => {
    cy.visit("/hospital");
  });

  it("should display at least 3 images", () => {
    cy.get("img").should("have.length.gte", 3);
  });
});
