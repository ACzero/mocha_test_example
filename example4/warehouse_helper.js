module.exports = {
  getAllInventory: function(warehouse){
    if(warehouse.hasInventory()){
      return warehouse.removeAll();
    }else {
      return 0
    }
  }
}
