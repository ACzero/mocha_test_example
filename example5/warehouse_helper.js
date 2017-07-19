module.exports = {
  getInventory: function(warehouse, amount){
    if(warehouse.hasEnoughInventory(amount)){
      return warehouse.remove(amount);
    }else {
      return 0
    }
  }
}
