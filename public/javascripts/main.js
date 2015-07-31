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
			success: function(filtered){
				
				filtered.forEach(function(country){
					$('.country-div').append('<li class="country">' + country.name + ' - ' + country.region + '</li><input type="checkbox" class="hasTravelled">I travelled here</input>')
				});

			}

		});
		

	});

	$('.hasTravelled').click(function(){
		if (this.checked){
			$.ajax({
				method: 'POST',
				url: '/has-travelled',
				success:
			})
		}


	});


})