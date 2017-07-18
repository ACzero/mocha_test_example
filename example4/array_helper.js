module.exports = {
  averageOf: function(array){
    var sum = array.reduce(function(sum, val){ return sum + val; }, 0)
    return sum / array.length
  }
}
