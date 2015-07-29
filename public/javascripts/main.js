$(document).on('ready', function(){

	// Click on Load Countries button
	$('#loadCountries').on('click', function(){

		$.ajax({

			method: 'GET',
			url: '/countries',
			success: function(countries){
				countries.forEach(function(country){
					$('.country-div').append('<li class="country">' + country.name + '</li>')
				});	
			}

		})

	});

	// Click on Search button
	$('.searchButton').on('click', function(){

		var theData = $('.searchBox').val();

		$.ajax({

			method: 'GET',
			url: '/search',
			data: {data: theData},
			success: function(){}

		});
		

	});


})