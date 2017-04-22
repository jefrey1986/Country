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
      console.log(resp);
  		countriesList.empty();

      resp.forEach(function(item) {
        var container = $('<div>');
        $(container).addClass('container-result');

        $('<h2>')
          .addClass('heading')
          .text(item.name)
          .appendTo(container);
    
        $('<ul>')
          .append($('<li>').text("Stolica: " + item.capital))
          .append($('<li>').text("Liczba ludności: " + item.population))
          .append($('<li>').text("Region: " + item.region))
          .append($('<li>').text("Język: " + item.languages))
          .appendTo(container)
          .hide();

        container
          .appendTo(countriesList)
          .click(function() {
            $(this).find('ul').slideToggle();
          });      

      });
	}	
});  
