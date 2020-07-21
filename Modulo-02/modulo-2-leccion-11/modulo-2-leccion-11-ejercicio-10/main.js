'use strict';

fetch('https://api.thecatapi.com/v1/images/search?format=json', {
  headers: { 'x-api-key': 'b699ef64-ae00-43ba-8ff2-9e4da10660ab' },
})
  .then((response) => response.json())
  .then((data) => {
    const kittiesDraw = document.querySelector('.js-kitties');
    kittiesDraw.src = data[0].url;
    console.log(data);
  });
