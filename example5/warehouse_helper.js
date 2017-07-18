module.exports = {
  getInventory: function(warehouse, amount){
    if(warehouse.hasInventory()){
      return warehouse.remove(amount);
    }else {
      return 0
    }
  }
}
