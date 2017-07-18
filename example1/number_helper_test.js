var number_helper = require('./number_helper.js');
var expect = require('chai').expect;

describe('NumberHelper', function(){
  beforeEach(function(){
    console.log('Setup...')
  });
  afterEach(function(){
    console.log('Teardown...')
  })

  describe('.isOdd()', function(){
    context('when argument is odd', function(){
      it('should not throw an error', function(){
        expect(function(){
          number_helper.isOdd(1);
        }).to.not.throw();
      });

      it('return true', function(){
        result = number_helper.isOdd(1);
        // equal: Asserts that the target is strictly (===) equal to the given val.
        expect(result).to.be.true;
      });
    });

    context('when argument is even', function(){
      it('should not throw an error', function(){
        expect(function(){
          number_helper.isOdd(2);
        }).to.not.throw();
      });

      it('return false', function(){
        result = number_helper.isOdd(2);
        expect(result).to.be.false;
      });
    });
  });
})
