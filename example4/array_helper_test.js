var arrayHelper = require('./array_helper.js');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('ArrayHelper', function(){
  describe('.averageOf()', function(){
    it('return avarage of array', function(){
      result = arrayHelper.averageOf([1,2,3]);
      expect(result).to.eql(2);
    })

    it('use reduce to sum array element', function(){
      var array = [1,2,3];
      reduceSpy = sinon.spy(array, 'reduce');

      arrayHelper.averageOf(array);

      expect(reduceSpy.calledOnce).to.be.true
      expect(reduceSpy.returned(6)).to.be.true
    })
  });
});
