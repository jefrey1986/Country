$(function(){
	var url = 'https://restcountries.eu/rest/v1/name/';
	var countriesList = $('#countries');

	$('#search').click(searchCountries);

	function searchCountries() {
 		var countryName = $('#country-name').val();
		if(!countryName.length) countryName = 'Poland';
		$.ajax({
  			url: url + countryName,
  			method: 'GET',
  			success: showCountriesList
  		});
	}

	function showCountriesList(resp) {
  		countriesList.empty();
		var fileteredArray = resp.filter(function(currentElement, index){
  		//console.log(currentElement);
  		//console.log(index);
  		return currentElement;
		})
		fileteredArray.forEach(function(item) {
   			$('<ul>').text("Kraj: " + item.name).appendTo(countriesList);
   			$('<li>').text("Stolica: " + item.capital).appendTo(countriesList);
   			$('<li>').text("Powierzchnia: " + item.area).appendTo(countriesList);
   			$('<li>').text("Liczba ludności: " + item.population).appendTo(countriesList);
   			$('<li>').text("Region: " + item.region).appendTo(countriesList);
   			$('<li>').text("Język: " + item.languages).appendTo(countriesList);
		});
	}

	$("ul").click(function(){
    	var list = $("li")
    	var isVisible = list.is(":visible");
    	if(isVisible) {
      		list.fadeOut("slow");
    	} else {
      		list.fadeIn("fast");
    	}
  	});

	
});  
