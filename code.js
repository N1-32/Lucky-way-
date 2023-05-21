// функція відображення ресторанів
function drawRestaurants(restaurants)
{
	var mainContainer = document.querySelector('.container');
    	
    // очищення головного контейнеру
    mainContainer.innerHTML = "";

	for (let i = 0; i < restaurants.length; i++) {
		let dis = 0;
		let s = "m";
		if (restaurants[i].dst !== undefined) {
			dis = restaurants[i].dst;
			if (dis >= 1000) {
				s = "km";
				dis = dis / 1000;
			}

			console.log(restaurants[i].id, dis, s);
        }
		
		var container = document.createElement('div');
		container.classList.add('wrapper'); 
   
		var card = document.createElement('div');
		card.classList.add('card');
   
		var imgSrc = document.createElement('img');
		imgSrc.src = restaurants[i].imgSrc;
		imgSrc.classList.add('card-img');
	
		card.appendChild(imgSrc);
   
		var nam = document.createElement('div');
		nam.classList.add('card-title'	);
		nam.textContent = restaurants[i].name;
		card.appendChild(nam);
		//новий блок
		var cardsub = document.createElement('div');
		cardsub.classList.add('card-sub');
   
		//додавання ліні	ї
		var line1 = document.createElement('img');
		line1.classList.add('line')	;
		line1.src = 'Line 56.svg'	;
		cardsub.appendChild(line1)	;
		//адреса
		var address = document.createElement('div');
		address.classList.add('location');
		address.textContent = restaurants[i].address;
		cardsub.appendChild(address);

		// дистанція
		if (restaurants[i].dst !== undefined) {
			var location = document.createElement('div');
			location.classList.add('location');
			location.textContent = dis + s;
			cardsub.appendChild(location);
        }
		
		//додавання лінії
   
		var line2 = document.createElement('img');
		line2.classList.add('line');
		line2.src ='Line 56.svg';
		cardsub.appendChild(line2);
		card.appendChild(cardsub);
		//додавання кнопки в блок card
		var butt = document.createElement('a');
		butt.href = "меню/menu.html";
		butt.classList.add('menu_btn');
		butt.textContent = 'Перейти';
		card.appendChild(butt);
		//додавання блоку кард в блок container
		container.appendChild(card);
   
		mainContainer.appendChild(container);
	}
}
function getGeooloc(restaurants){	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) { Position(position, restaurants); });
	}
	else {
		let t = document.getElementById('p');
		t.innerHTML = " error ";
	}
}

function getDistanceBetweenPoints(lat1, lon1, lat2, lon2, unit = 'miles') {
	let theta = lon1 - lon2;
	let distance = 60 * 1.1515 * (180 / Math.PI) * Math.acos(
		Math.sin(lat1 * (Math.PI / 180)) * Math.sin(lat2 * (Math.PI / 180)) +
		Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.cos(theta * (Math.PI / 180))
	);
	if (unit == 'miles') {
		return Math.round(distance, 2);
	} else if (unit == 'metres') {
		return Math.round(distance * 1609.344, 2);
	}
}

function compareByDST(a, b) {
	if (a.dst < b.dst) {
		return -1;
	}
	if (a.dst > b.dst) {
		return 1;
	}
	return 0;
}

function Position(positon, restaurants) {
	var unit = 'metres';
	let d1 = document.querySelectorAll('.wrapper');  
	let distances = [];

	d1.forEach(function (d1) {
		d1.remove();
	});
	let lon2 = positon.coords.longitude;
	let lat2 = positon.coords.latitude;
	for (let i = 0; i < restaurants.length; i++) {
		let lat1 = restaurants[i].location.latitude;
		let lon1 = restaurants[i].location.longitude;
		let distance = getDistanceBetweenPoints(lat1, lon1, lat2, lon2, unit);

		//json.sory(sortarr);
		console.log(`${restaurants[i].id} ${distance} м`);

		distances.push({
			id: restaurants[i].id,
			dst: distance,
			name: restaurants[i].name,
			category_id: restaurants[i].category_id,
			imgSrc: restaurants[i].imgSrc,
			address: restaurants[i].address,
			location: {
				latitude: restaurants[i].latitude,
				longitude: restaurants[i].longitude
			},
			chedule: restaurants[i].chedule,
			website: restaurants[i].website,
		});
	}
	distances.sort(compareByDST);
	drawRestaurants(distances);
}
