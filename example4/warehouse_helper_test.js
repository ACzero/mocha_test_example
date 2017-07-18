// 这是所说的定义上的spy，并非sinon的spy
var warehouseHelper = require('./warehouse_helper.js');
var expect = require('chai').expect;

describe('WarehouseHelper', function(){
  describe('.getAllInventory()', function(){
    context('warehouse has inventory', function(){
      it('get target number', function(){
        var warehouse = {
          hasInventory: function() { return true },
          removeAll: function() { return 50 }
        };

        amount = warehouseHelper.getAllInventory(warehouse)
        expect(amount).to.eql(50);
      });
    });

    context('warehouse do not have inventory', function(){
      it('get 0', function(){
        var warehouse = {
          hasInventory: function() { return false }
        };

        amount = warehouseHelper.getAllInventory(warehouse)
        expect(amount).to.eql(0);
      });
    });
  });
});
