

 var mainContaner = document.querySelector('.container');

 var container = document.createElement('div');
 container.classList.add('wrapper');

 var card = document.createElement('div');
 card.classList.add('card');

 var imgSrc = document.createElement('img');
 imgSrc.src = 'img.jpg';
 imgSrc.classList.add('card-img');
 
 card.appendChild(imgSrc);

 var nam = document.createElement('div');
 nam.classList.add('card-title');
 nam.textContent = "KFC";
 card.appendChild(nam);
//новий блок
 var cardsub = document.createElement('div');
 cardsub.classList.add('card-sub');

//додавання лінії
var line1 = document.createElement('img');
 line1.classList.add('line');
 line1.src = 'Line 56.svg';
 cardsub.appendChild(line1);
//адреса
 var location = document.createElement('div');
location.classList.add('location');
location.textContent = 'пр. Свободи, 19. <br> 1 км 500 м';
//додавання лінії
var line2 = document.createElement('img');
line2.classList.add('line');
line2.src = 'Line 56.svg';
cardsub.appendChild(line2);
//додавання кнопки в блок card
var butt = document.createElement('a');
butt.href = '#';
butt.classList.add('menu_btn');
butt.textContent = 'Перейти';
card.appendChild(butt);
//додавання блоку кард в блок container
 container.appendChild(card);

 mainContaner.appendChild(container);
