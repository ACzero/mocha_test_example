var numberHelper = require('./number_helper.js');
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
          numberHelper.isOdd(1);
        }).to.not.throw();
      });

      it('return true', function(){
        result = numberHelper.isOdd(1);
        expect(result).to.be.true;
      });
    });

    context('when argument is even', function(){
      it('should not throw an error', function(){
        expect(function(){
          numberHelper.isOdd(2);
        }).to.not.throw();
      });

      it('return false', function(){
        result = numberHelper.isOdd(2);
        expect(result).to.be.false;
      });
    });
  });
})
