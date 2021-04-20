document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  console.log('Загрузился');

  const cardsContainer = document.querySelector('.cards__items');

  const createCard = (info) => {
    cardsContainer.innerHTML = '';
    for (const i of info) {
      const title = i.title,
        img = i.img,
        author = i.author,
        div = document.createElement('div');

      div.className = 'cards__item';
      div.innerHTML = `
            <a href="" class="cards__image">
              <img src=${img} alt="" srcset="" />
            </a>
            <a href="" class="cards__name">${title}</a>
            <a href="" class="cards__author">${author}</a>
            <a href="" class="cards__button">Добавить в библиотеку</a>
            </div>`;
      cardsContainer.appendChild(div);
    }
  };
  const json = fetch('/js/data.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Work with JSON data here
      createCard(data);
      console.log(data);
    })
    .catch((err) => {
      // Do something for an error here
    });
});
