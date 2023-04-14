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

function getRestaurantByCategoryId(category_id){
   return window.restaurants.filter(function (value, index, array){
      return value.category_id == category_id;
   });
}

function filterRestaurantByCategoryId(data){
    window.filterCategoryId = data.getAttribute("data-category");
    
    const elements = document.querySelectorAll('.list.active');
    elements.forEach((element) => {
        element.classList.remove('active');
    });

    data.classList.add('active');

    return searchRestaurants();
}

function searchRestaurants(){
    let searchString = document.getElementById("search-box").value;

    let result = [];
    if(!window.filterCategoryId) {
        result = window.restaurants;
    }
    else {
        result = getRestaurantByCategoryId(window.filterCategoryId);
    }

    if(!searchString){
        console.log(result);
        return result;
    }

    result = result.filter(function (value, index, array){
      return value.name.toLowerCase().includes(searchString.toLowerCase());
    });

   console.log(result);
   return result;
}
