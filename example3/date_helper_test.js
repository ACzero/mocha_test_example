var dateHelper = require('./date_helper.js');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('DateHelper', function(){
  describe('.todayIsMondy', function(){
    context('is monday now', function(){
      before(function(){
        stub_val = new Date('2017-07-17T12:00').getTime();
        sinon.stub(Date, "now").returns(stub_val);
      });
      after(function(){
        Date.now.restore();
      });

      it('return true', function(){
        expect(dateHelper.todayIsMondy()).to.be.true;
      });
    });

    context('is not monday now', function(){
      before(function(){
        stub_val = new Date('2017-07-19T12:00').getTime();
        sinon.stub(Date, "now").returns(stub_val);
      });
      after(function(){
        Date.now.restore();
      });

      it('return false', function(){
        expect(dateHelper.todayIsMondy()).to.be.false;
      });
    })
  });
});
