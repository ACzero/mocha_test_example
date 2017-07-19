var warehouseHelper = require('./warehouse_helper.js');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('WarehouseHelper', function(){
  describe('.getInventory()', function(){
    context('warehouse has inventory', function(){
      it('get target number', function(){
        var warehouse = {
          hasEnoughInventory: function() {},
          remove: function() {}
        };
        var warehouseMock = sinon.mock(warehouse);
        var expectation1 = warehouseMock.expects('hasEnoughInventory').withArgs(50).returns(true);
        var expectation2 = warehouseMock.expects('remove').withArgs(50).returns(50);

        var amount = warehouseHelper.getInventory(warehouse, 50)

        expect(amount).to.eql(50);
        expectation1.verify();
        expectation2.verify();
      });
    });

    context('warehouse do not have enough inventory', function(){
      it('get 0', function(){
        var warehouse = {
          hasEnoughInventory: function() {},
          remove: function() {}
        };
        var warehouseMock = sinon.mock(warehouse);
        var expectation1 = warehouseMock.expects('hasEnoughInventory').withArgs(51).returns(false);
        var expectation2 = warehouseMock.expects('remove').never();

        var amount = warehouseHelper.getInventory(warehouse, 51)

        expect(amount).to.eql(0);
        expectation1.verify();
        expectation2.verify();
      });
    });
  });
});
