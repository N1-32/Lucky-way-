const json_restaurants_path = "http://localhost/json/restaurant-T1.json";
const json_menu_path = "http://localhost/json/menu-T2.json";
const json_category_path = "http://localhost/json/category-T3.json";
console.log("Loading data, please wait...");

fetchJSONFile(json_restaurants_path, function(data)
    {
        console.log(data)
        window.restaurants = data;
        console.log("Data loaded!");
    });
fetchJSONFile(json_menu_path, function(data)
    {
        console.log(data)
        window.menu = data;
        console.log("Data loaded!");
    });
fetchJSONFile(json_category_path, function(data)
    {
        console.log(data)
        window.category = data;
        console.log("Data loaded!");
    });


console.log("1. Call getRestaurantNames() to see a restaurant names;");
console.log("2. Call getRestaurant(number) to see a restaurant by its number in a list;");
console.log("3. Call getRestaurantMenu(number) to see a restaurant menu by restaurant number in a list;");
console.log("4. Call searchRestaurants(searchString) to search a restaurants by name;");
console.log("5. Call getDistanceToRestaurant(number, lat, long) to get a distance between a restaurant (by number) and your coordinates;");
console.log("example: getDistanceToRestaurant(2, 49.839781824666304, 24.022373858866388); (KFC та Тролейбусна зупинка 'Університет' (Франка))");

function fetchJSONFile(path, callback) {
   var httpRequest = new XMLHttpRequest();
   httpRequest.onreadystatechange = function() {
       if (httpRequest.readyState === 4) {
           if (httpRequest.status === 200) {
               var data = JSON.parse(httpRequest.responseText);
               if (callback) callback(data);
           }
       }
   };
   httpRequest.open('GET', path);
   httpRequest.setRequestHeader("Content-type", "application/json"); 
   httpRequest.send(); 
}

function getRestaurantNames() {
   let names = [];
   for (let i = 0; i < window.restaurants.length; i++) 
   {
       names[i] = window.restaurants[i].name;
   }
   return names;
}

function getRestaurant(number) {
   return restaurants[number-1];
}

function getRestaurantMenu(number) {
   let menu = [];
   for(let i = 0; i < window.restaurants[number-1].menu.length; i++)
   {
      menu[i] = window.restaurants[number-1].menu[i].name;
   }
   return menu;
}

function searchRestaurants(searchString){
   return window.restaurants.filter(function (value, index, array){
      return value.name.toLowerCase().includes(searchString.toLowerCase());
   });
}

function getDistanceToRestaurant(number, lat, long){
   let restaurant = window.restaurants[number-1];
   return geolib.getDistance(
      { latitude: restaurant.location.latitude, longitude: restaurant.location.longitude },
      { latitude: lat, longitude: long }
  );
}

function getRestaurantByCategoryId(category_id){
   return window.restaurants.filter(function (value, index, array){
      return value.category_id == category_id;
   });
}
