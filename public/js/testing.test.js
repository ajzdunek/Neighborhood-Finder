<<<<<<< HEAD
=======
describe("userInput", function() {
  it("should take in an email address", function() {
    expect("hello@gmail.com").to.equal(true);

>>>>>>> db540889443f80e7cae3d0e3de6c869bcf262344
var chai = require('chai')
  , Strategy = require('../index.html');


describe("userInput", function() {
  it("should take in an email address", function() {
    expect("hello@hi.com").to.equal(true);
  });

  it("should be a string", function() {
    expect(1234).to.throw(Error);
  });
});

<<<<<<< HEAD

=======
>>>>>>> db540889443f80e7cae3d0e3de6c869bcf262344
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
