describe('test', () => {
  it('first test', () => {
    cy.visit('http://localhost:3000');
    expect(true).to.equal(true);
  })
})

export {}
