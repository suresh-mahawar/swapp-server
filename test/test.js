var assert = require('assert');
var User = require('../app/model/user.model');

describe('Array', function() {
  describe('#indexOf2()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe('User Model Unit Tests: ', function() {
	
	var user;

	beforeEach(function(done) {
		user = new User({email: 'test@gmail.com'});

        user.save(function() {
           done();
        });
	});

	describe('Method save', function() {
		it('should be able to save without problems', function(done) {
			user = new User({email: 'test@gmail.com'});
			return user.save(function(err) {
				should.not.exit(err);
				done();
			});
		});
	});

});
