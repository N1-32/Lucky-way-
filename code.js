// функція відображення ресторанів
function drawRestaurants(restaurants)
{
	
	var mainContainer = document.querySelector('.container');
    	
    // очищення головного контейнеру
    mainContainer.innerHTML = "";

	for(let i=0; i<restaurants.length; i++){
    	//  контейнер

    	var Container = document.createElement('div');
    	Container.classList.add('wrapper');
    	//контейнер в контейнері
    	var newContainer = document.createElement('div');
    	newContainer.classList.add('card');


    	// додавання зображення до нового контейнера
    	var img = document.createElement('img');
    	img.classList.add('card-img');
    	img.src = restaurants[i].imgSrc;
    	newContainer.appendChild(img);

    	// додавання заголовока до нового контейнера
    	var title = document.createElement('div');
    	title.classList.add('card-title');
    	title.textContent = restaurants[i].name;
    	newContainer.appendChild(title);

    	// додавання адреси до нового контейнера
    	var address = document.createElement('div');
    	address.classList.add('card-sub');
    	address.textContent = restaurants[i].address + ". Робочий час: " + 
   		restaurants[i].chedule;
    	newContainer.appendChild(address);

    	// кнопка перейти
    	var link = document.createElement('a');
    	link.classList.add('card_btn');
    	link.href = "#";
    	link.textContent = "Перейти";
    	newContainer.appendChild(link);

    	// додавання контейнера в контейнер
    	Container.appendChild(newContainer);
    	//додавання контейнера в головний контейнер5r
    	mainContainer.append(Container);
	}
}


function getGeooloc(){
let d1 = document.querySelectorAll('.wrapper')


 
let unit = "metres";
function getDistanceBetweenPoints(lat1, lon1, lat2, lon2, unit = 'miles') {
    let theta = lon1 - lon2;
    let distance = 60 * 1.1515 * (180/Math.PI) * Math.acos(
        Math.sin(lat1 * (Math.PI/180)) * Math.sin(lat2 * (Math.PI/180)) + 
        Math.cos(lat1 * (Math.PI/180)) * Math.cos(lat2 * (Math.PI/180)) * Math.cos(theta * (Math.PI/180))
    );
    if (unit == 'miles') {
        return Math.round(distance, 2);
    } else if (unit == 'metres') {
        return Math.round(distance * 1609.344, 2);
    }
}
  
let t = document.getElementById('p');
let distances = [];
	let errorMessage = "Your geolocation is not available";
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(Position);
} else {
   
    alert(errorMessage);
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

function Position(positon){
	d1.forEach(function(d1) {
	d1.remove();
  });
	let lon2= positon.coords.longitude;
	let lat2 = positon.coords.latitude;
	for(let i=0 ; i<restaurants.length; i++){
        let lat1 = restaurants[i].location.latitude;
		let lon1 = restaurants[i].location.longitude;
		let distance = getDistanceBetweenPoints(lat1, lon1, lat2, lon2, unit );
		
		//restaurants.sory(sortarr);
		console.log(`${restaurants[i].id} ${distance} м`);
	
       distances.push({
		id: restaurants[i].id,
		dst : distance,
		name : restaurants[i].name,
		category_id : restaurants[i].category_id,
        imgSrc: restaurants[i].imgSrc,
		address : restaurants[i].address,
		location :{ latitude: restaurants[i].latitude ,
			longitude: restaurants[i].longitude },
		chedule :restaurants[i].chedule,
		website : restaurants[i].website,
	});
}
		
		distances.sort(compareByDST);
	
	for(let i=0; i<distances.length; i++){
		var mainContainer = document.querySelector('.container');
		
		//  контейнер
	
		var Container = document.createElement('div');
		Container.classList.add('wrapper');
		//контейнер в контейнері
		var newContainer = document.createElement('div');
		newContainer.classList.add('card');
	
	
		// додавання зображення до нового контейнера
		var img = document.createElement('img');
		img.classList.add('card-img');
		img.src = distances[i].imgSrc;
		newContainer.appendChild(img);
	
		// додавання заголовока до нового контейнера
		var title = document.createElement('div');
		title.classList.add('card-title');
		title.textContent = distances[i].name;
		newContainer.appendChild(title);
	
		// додавання адреси до нового контейнера
		var address = document.createElement('div');
		address.classList.add('card-sub');
		address.textContent = distances[i].address + ". Робочий час: " + 
		distances[i].chedule;
		newContainer.appendChild(address);
	
		// кнопка перейти
		var link = document.createElement('a');
		link.classList.add('card_btn');
		link.href = "#";
		link.textContent = "Перейти";
		newContainer.appendChild(link);
	
		// додавання контейнера в контейнер
		Container.appendChild(newContainer);
		//додавання контейнера в головний контейнер5r
		mainContainer.append(Container);
	}
	}
	
}
