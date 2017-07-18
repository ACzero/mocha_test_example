// 展示的是mock的定义

var warehouseHelper = require('./warehouse_helper.js');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('WarehouseHelper', function(){
  describe('.getInventory()', function(){
    context('warehouse has inventory', function(){
      it('get target number', function(){
        var warehouse = {
          hasInventory: function() { return true },
          remove: function(amount) { return amount }
        };
        var hasInventorySpy = sinon.spy(warehouse, 'hasInventory');
        var removeSpy = sinon.spy(warehouse, 'remove');

        var amount = warehouseHelper.getInventory(warehouse, 50);

        expect(amount).to.eql(50);
        expect(hasInventorySpy.calledOnce).to.be.true;
        expect(removeSpy.withArgs(50).calledOnce).to.be.true;
      });
    });

    context('warehouse do not have enough inventory', function(){
      it('get 0', function(){
        var warehouse = {
          hasInventory: function() { return false },
          remove: function() {}
        };
        var hasInventorySpy = sinon.spy(warehouse, 'hasInventory');
        var removeSpy = sinon.spy(warehouse, 'remove');

        var amount = warehouseHelper.getInventory(warehouse, 51);

        expect(amount).to.eql(0);
        expect(hasInventorySpy.calledOnce).to.be.true;
        expect(removeSpy.notCalled).to.be.true;
      });
    });
  });
});
