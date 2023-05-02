




// отримати дані з JSON
var json = [
	{
		"id" : 1,
		"category_id" : "2",
        "imgSrc": "img.jpg",
		"name" : "Budzzini",
		"address" : "вул.Дорошенка, 8",
		"location" :{ "latitude": 49.8399247 ,
			"longitude": 24.0263229 },
		"chedule" : "10:00-00:00",
		"website" : "https://www.gazdagroup.com.ua/"
	},
	{
		"id" : 2,
		"category_id" : "1",
        "imgSrc": "img.jpg",
		"name" : "KFC",
		"address" : " проспект Свободи, 19",
		"location" :{ "latitude": 49.842610033605986 ,
			 "longitude": 24.030819025387558 },
		"chedule" : "09:00-20:00",
		"website" : "https://www.kfc-ukraine.com/"
	},
	{
		"id" : 3,
		"category_id" : "4",
        "imgSrc": "img.jpg",
		"name" : "Пузата хата",
		"address" : "Пр.Шевченка, 10",
		"location" :{ "latitude": 49.8374365333266 ,
		     "longitude": 24.03126671374387 },
		"chedule" : "10:00-20:00",
		"website" : "https://puzatahata.ua/"
	},
	{
		"id" : 4,
		"category_id" : "3",
        "imgSrc": "img.jpg",
		"name" : "Lviv Croissants",
		"address" : "вул.Князя Романа, 18",
		"location" :{ "latitude": 49.83833872647754 ,
			 "longitude": 24.032425213743892 },
		"chedule" : "08:00-20:00",
		"website" : "https://lvivcroissants.com/ua/"
	},
	{
		"id" : 5,
		"category_id" : "6",
        "imgSrc": "img.jpg",
		"name" : "36По",
		"address" : "вул.Куліша, 36",
		"location" :{ "latitude": 49.842492411934586 , 
			"longitude": 24.03087266956581 },
		"chedule" : "11:00-20:00",
		"website" : "https://36po.com.ua/"
	},
	{
		
		"id" : 6,
		"category_id" : "2",
        "imgSrc": "img.jpg",
		"name" : "Ляля",
		"address" : "вул. Словацького, 16",
		"location" :{ "latitude": 49.8386611 ,
			"longitude": 24.0230166 },
		"chedule" : "11:00-22:00",
		"website" : "https://lyalya.choiceqr.com"
	 },
	 {
		"id" : 7,
		"category_id" : "1",
        "imgSrc": "img.jpg",
		"name" : "TRDLO",
		"address" : "вул. Ставропігійська, 5",
		"location" :{ "latitude": 49.8427740 ,
			"longitude": 24.0326134 },
		"chedule" : "Графік роботи 11:00-21:30",
		"website" : ""
	 },
	 {
		"id" : 8,
		"category_id" : "7",
        "imgSrc": "img.jpg",
		"name" : "Mamenori",
		"address" :  "вул.Братів Рогатинців, 4",
		"location" :{  "latitude": 49.8398380 ,
		   "longitude": 24.0314559 },
		"chedule" : "11:00-23:00",
		"website" : "https://mamenorisushi.com"
	 },
	 {
		"id" : 9,
		"category_id" : "5",
        "imgSrc": "img.jpg",
		"name" : "Om Nom Nom",
		"address" :  "вул.Римлянина, 10",
		"location" :{  "latitude": 49.8386111 ,
		   "longitude": 24.0375197 },
		"chedule" : "09:00-22:00",
		"website" : "https://omnomnom-rymlyanyna.choiceqr.com/delivery/section:osnovne-menyu"
	 },
	 {
		"id" : 10,
		"category_id" : "3",
        "imgSrc": "img.jpg",
		"name" : "Пстург,хліб та вино",
		"address" :  "вул.Братів Рогатинців, 49",
		"location" :{  "latitude": 49.8409392 ,
		   "longitude": 24.0346920 },
		"chedule" : "11:00-24:00",
		"website" : "https://www.fest.lviv.ua/uk/restaurants/pstruhhlibtavyno/"
	 },
	 {
		"id" : 11,
		"category_id" : "2",
        "imgSrc": "img.jpg",
		"name" : "Грузинський",
		"address" :  "вул.Павла Ковжуна, 2",
		"location" :{  "latitude": 49.8379925 ,
		   "longitude": 24.0291467 },
		"chedule" : "12:00-23:00",
		"website" : "https://georgian.choiceqr.com"
	 },
	 {
		"id" : 12,
		"category_id" : "8",
        "imgSrc": "img.jpg",
		"name" : "Kebab house на мангал",
		"address" :  "вул.Князя Романа, 2",
		"location" :{  "latitude": 49.8389390 ,
		   "longitude": 24.0320846 },
		"chedule" : "09:30-23:30",
		"website" : "https://namangalkebabhouse.ua"
	 },
	 {
		"id" : 13,
		"category_id" : "",
        "imgSrc": "img.jpg",
		"name" : "ЦiKaVa",
		"address" :  "вул.Личаківська, 86",
		"location" :{  "latitude": 49.8379198 ,
		   "longitude": 24.0558929 },
		"chedule" : "09:00-21:00",
		"website" : "https://tsikava.com.ua"
	 },
	 {
		"id" : 14,
		"category_id" : "6",
        "imgSrc": "img.jpg",
		"name" : "Cukor red",
		"address" :  "вул.Крива Липа, 3",
		"location" :{  "latitude": 49.8403766 ,
		   "longitude": 24.0266894 },
		"chedule" : "08:30-19:00 ",
		"website" : "https://red.cukor.lviv.ua"
	 },
	 {
		"id" : 15,
		"category_id" : "7",
        "imgSrc": "img.jpg",
		"name" : "Chin Chin",
		"address" :  "вул.Тадеуша Костюшка, 2",
		"location" :{  "latitude": 49.8392905 ,
		   "longitude": 24.0252948 },
		"chedule" : "10:00-21:00",
		"website" : "https://chin-chin.ua"
	 },
	 {
		"id" : 16,
		"category_id" : "3",
        "imgSrc": "img.jpg",
		"name" : "Сім поросят",
		"address" :  "вул.Степана Бандери, 9",
		"location" :{  "latitude": 49.8345388 ,
		   "longitude": 24.0173702 },
		"chedule" : "10:00-22:00",
		"website" : "https://restaurant-7pigs.virtual.ua/ua/"
	 },
	 {
		"id" : 17,
		"category_id" : "6",
        "imgSrc": "img.jpg",
		"name" : "Edonismo",
		"address" :  "вул.Лесі Українки, 29",
		"location" :{  "latitude": 49.8437686 ,
		   "longitude": 24.0316828 },
		"chedule" : "09:00-22:00",
		"website" : "https://edonismo.choiceqr.com"
	 },
	 {
		"id" : 18,
		"category_id" : "1",
        "imgSrc": "img.jpg",
		"name" : "Gelateria",
		"address" :  "вулиця Словацького, 16",
		"location" :{  "latitude": 49.8386611 ,
		   "longitude": 24.0230166 },
		"chedule" : "09:00-21:00",
		"website" : "https://glovoapp.com/ua/uk/lviv/gelateria-gelizko-lvi/?utm_source=google&utm_medium=cpc&utm_campaign=Google_Performance_UA_ALLOpen_Search_cpa_All_FirstOrder_0_NewUsers_Ukranian__DigitalBudget_NoPromo_0_09032022&utm_campaignid=16522052603&utm_adgroupid=140791549632&utm_term=%28_term%29&utm_matchtype=%28_matchtype%29&utm_device=%28_device%29&gclid=CjwKCAjwov6hBhBsEiwAvrvN6MikgQjPNw8mw7FJbw3BmI-P1YWnPzXO3MGD3wlrORrYxxckT84acRoCSTYQAvD_BwE"
	 },
	 {
		"id" : 19,
		"category_id" : "5",
        "imgSrc": "img.jpg",
		"name" : "Marble bar", 
		"address" :  "вул.Братів Рогатинців, 22",
		"location" :{  "latitude": 49.8404125 ,
		   "longitude": 24.0337608 },
		"chedule" : "10:00-21:00",
		"website" : "https://www.marblebar.com.ua "
	 },
	 {
		"id" : 20,
		"category_id" : "6",
        "imgSrc": "img.jpg",
		"name" : "Sowa cafe",
		"address" :  "вул.Староєврейська, 40",
		"location" :{  "latitude": 49.8408312 ,
		   "longitude": 24.0337673 },
		"chedule" : "10:00-21:00",
		"website" : "https://sowa.choiceqr.com"
	 },
	 {
		"id" : 21,
		"category_id" : "8",
        "imgSrc": "img.jpg",
		"name" : "EPIC CHICKEN",
		"address" :  "вул.Миколи Вороного, 3",
		"location" :{  "latitude": 49.8382819 ,
		   "longitude": 29.8382819 },
		"chedule" : "Графік роботи 10:00-23:00",
		"website" : "https://chicken.cukor.lviv.ua"
	 },
	 {
		"id" : 22,
		"category_id" : "2",
        "imgSrc": "img.jpg",
		"name" : "Chveni",
		"address" :  "вул.Липинського, 36",
		"location" :{  "latitude": 49.8623415 ,
		   "longitude": 24.0311304 },
		"chedule" : "11:00-21:00",
		"website" : "https://chveni.com.ua/restaurant/lviv"
	 },
	 {
		"id" : 23,
		"category_id" : "4",
        "imgSrc": "img.jpg",
		"name" : "Da Vinci",
		"address" :  "вул.пр. Свободи, 22",
		"location" :{  "latitude": 49.8434004 ,
		   "longitude": 24.0273028 },
		"chedule" : "10:00-21:00",
		"website" : "https://da-vinci.lviv.ua"
	 },
	 {
		"id" : 24,
		"category_id" : "3",
        "imgSrc": "img.jpg",
		"name" : "Голодний Микола",
		"address" :  "вул.Стрийська, 352",
		"location" :{  "latitude": 49.7773323 ,
		   "longitude": 24.0132162 },
		"chedule" : "12:00-24:00",
		"website" : "https://golodnyimykola.com.ua"
	 },
	 {
		"id" : 25,
		"category_id" : "2",
        "imgSrc": "img.jpg",
		"name" : "Хінкальня на Кривій Липі",
		"address" :  "вул.Братів Рогатинців, 22",
		"location" :{  "latitude": 49.8404125 ,
		   "longitude": 24.0337608 },
		"chedule" : "10:00-21:00",
		"website" : ""
	 }
];
let t = document.getElementById('p');


for(let i=0; i<json.length; i++){
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
    img.src = json[i].imgSrc;
    newContainer.appendChild(img);

    // додавання заголовока до нового контейнера
    var title = document.createElement('div');
    title.classList.add('card-title');
    title.textContent = json[i].name;
    newContainer.appendChild(title);

    // додавання адреси до нового контейнера
    var address = document.createElement('div');
    address.classList.add('card-sub');
    address.textContent = json[i].address + ". Робочий час: " + 
    json[i].chedule;
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

function getGeooloc(){
let d1 = document.querySelectorAll('.wrapper')
d1.forEach(function(d1) {
	d1.remove();
  });

 
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
	let lon2= positon.coords.longitude;
	let lat2 = positon.coords.latitude;
	for(let i=0 ; i<json.length; i++){
        let lat1 = json[i].location.latitude;
		let lon1 = json[i].location.longitude;
		let distance = getDistanceBetweenPoints(lat1, lon1, lat2, lon2, unit );
		
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