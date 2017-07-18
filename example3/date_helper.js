module.exports = {
  todayIsMondy: function(){
    return (new Date(Date.now()).getDay()) == 1
  }
}
