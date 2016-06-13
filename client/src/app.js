var RecordStore = require('./record_store/record_store.js');
var sampleRecords = require('./sample.json')
var Record = require('./record_store/record.js');
var RecordStoreView = require('./record_store/record_store_view.js');

window.onload = function() {
  var recordStore = new RecordStore("HMV", "London");

  for(recordData of sampleRecords){
    recordStore.addRecord(new Record(recordData.title, recordData.artist, recordData.price));
  } 
  var recordStoreView = new RecordStoreView(recordStore)
  recordStoreView.renderTo();
}