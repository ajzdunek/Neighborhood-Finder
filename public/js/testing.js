describe("userInput", function() {
    it("should take in an email address", function() {
      expect("hello@hi.com").to.equal(true);
    });
  
    it("should be a string", function() {
      expect(1234).to.throw(Error);
    });
  
  });