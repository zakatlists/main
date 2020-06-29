const $ = require('https://code.jquery.com/jquery-3.3.1.min.js');

$.get('https://v1.nocodeapi.com/punch__lines/google_sheets/eXHyWjHypngeOvQb?tabId=Sheet1', function(res) {
  console.log(res.data);
})
