var expect = require("chai").expect;
var $ = require("jquery");
var app = require('./app.js');

describe(".modal", function() {
  it("should have an id", function() {
    expect($('.modal')).to.have.id();
  });
});

/**
 * test-two.js
 * no tests required. No pure functions dedected.
 */

