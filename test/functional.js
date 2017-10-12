process.env.NODE_ENV = 'test';
var app = require('../server');
var http = require('http');
// use zombie.js as headless browser
var Browser = require('zombie');

describe('home page', function() {
  before(function() {
    // initialize the browser using the same port as the test application
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

   // load thepage
  before(function(done) {
  this.browser.visit('/', done);
  });
    it('should get the homepage', function(){
      assert.ok(this.browser.success);
    });
    it('should refuse age if equal to 0');
    it('should refuse if rel is empty');
    it('should keep values on submissions');
    it('should accept complete submissions');
  });