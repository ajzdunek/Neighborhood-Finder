describe("userInput", function() {
  it("should take in an email address", function() {
    expect("hello@hi.com").to.equal(true);
  });

  it("should be a string", function() {
    expect(1234).to.throw(Error);
  });
});

describe("ifElseFunction", function() {
  it("should equal to a number", function() {
    expect(175).to.equal(true);
  });

  it("should not be a string", function() {
    expect("hello").to.throw(Error);
  });

  it("should not be be null", function() {
    expect(null).to.throw(Error);
  });
});
