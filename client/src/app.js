const ListView = require('./views/listView');
const Request = require('./services/request.js');

const listView = new ListView();
const request = new Request('http://localhost:3000/api/bucket_list');

const appStart = function(){
  request.get(getCountriesRequestComplete);

  const createSelectButton = document.querySelector('#country-select');
  createSelectButton.addEventListener('click', selectorClicked);
};
