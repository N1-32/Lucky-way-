
for(let i=0; i<restaurants.length; i++){
  
    
	var mainContaner = document.querySelector('.container');
   
	var container = document.createElement('div');
	container.classList.add('wrapper'); 
   
	var card = document.createElement('div');
	card.classList.add('card');
   
	var imgSrc = document.createElement('img');
	imgSrc.src = restaurants[i].imgSrc;
	imgSrc.classList.add('card-img');
	
	card.appendChild(imgSrc);
   
	var nam = document.createElement('div');
	nam.classList.add('card-title');
	nam.textContent = restaurants[i].name;
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
   location.textContent = restaurants[i].location;
   cardsub.appendChild(location);
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
   
	mainContaner.appendChild(container);
   }
   
   function getGeooloc(){
   let d1 = document.querySelectorAll('.wrapper')
	
   
   var unit = 'metres';
   
   
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
	   if(navigator.geolocation ){
			   navigator.geolocation.getCurrentPosition(Position); }
			   else{
				 t = documet.getElementById('p').innerHTML = " error ";
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
	   for(let i=0 ; i<json.length; i++){
		   let lat1 = json[i].location.latitude;
		   let lon1 = json[i].location.longitude;
		   let distance = getDistanceBetweenPoints(lat1, lon1, lat2, lon2, unit);
		   
		   //json.sory(sortarr);
		   console.log(`${json[i].id} ${distance} м`);
	   
	   
		  distances.push({
		   id: json[i].id,
		   dst : distance,
		   name : json[i].name,
		   category_id : json[i].category_id,
		   imgSrc: json[i].imgSrc,
		   address : json[i].address,
		   location :{ latitude: json[i].latitude ,
			   longitude: json[i].longitude },
		   chedule :json[i].chedule,
		   website : json[i].website,
	   });
   }
		   
		   distances.sort(compareByDST);
		   var s ;
		   
	   for(let i=0; i<distances.length; i++){
		   dis = distances[i].dst;
		   if (dis < 1000) {
			   s = "m";
			  console.log(dis,s);
			} else {
			   s = "km";
			dis = dis / 1000;}
			console.log(distances[i].id, dis, s);
   
			var mainContaner = document.querySelector('.container');
   
			var container = document.createElement('div');
			container.classList.add('wrapper');
		   
			var card = document.createElement('div');
			card.classList.add('card');
		   
			var imgSrc = document.createElement('img');
			imgSrc.src = distances[i].imgSrc;
			imgSrc.classList.add('card-img');
			
			card.appendChild(imgSrc);
		   
			var nam = document.createElement('div');
			nam.classList.add('card-title');
			nam.textContent = distances[i].name;
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
		   location.textContent = distances[i].location + dis + s;
		   cardsub.appendChild(location);
		   //додавання лінії
		   
		   var line2 = document.createElement('img');
		   line2.classList.add('line');
		   line2.src = 'Line 56.svg';
		   cardsub.appendChild(line2);
		   card.appendChild(cardsub);
		   //додавання кнопки в блок card
		   var butt = document.createElement('a');
		   butt.href = "меню/menu.html";;
		   butt.classList.add('menu_btn');
		   butt.textContent = 'Перейти';
		   card.appendChild(butt);
		   //додавання блоку кард в блок container
			container.appendChild(card);
		   
			mainContaner.appendChild(container);
		   
	   
   }
   }
   
   }
