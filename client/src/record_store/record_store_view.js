var RecordStoreView = function(recordStore) {
  this.recordStore = recordStore;
}

RecordStoreView.prototype = {

  clearScreen: function() {
    var recordList = document.getElementById('records')
    recordList.innerHTML = "";
  },

  renderTo: function() {

    var recordListDisplay = document.getElementById('recordList');
    recordListDisplay.innerText = "Record List: " + this.recordStore.recordList;

    var recordList = document.getElementById('records');

    for(record of this.recordStore.records){
      var recordListItem =document.createElement('li');
      recordListItem.innerText = record.title + " " + record.artist + " £" + record.price;
      recordList.appendChild(recordListItem);
      console.log(record);
    }
  }
}

module.exports = RecordStoreView;