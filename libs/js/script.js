	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selCountry').val(),
				lang: $('#selLanguage').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#txtContinent').html(result['data'][0]['continent']);
					$('#txtCapital').html(result['data'][0]['capital']);
					$('#txtLanguages').html(result['data'][0]['languages']);
					$('#txtPopulation').html(result['data'][0]['population']);
					$('#txtArea').html(result['data'][0]['areaInSqKm']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	
	});

	$('#btnRun1').click(function() {

		$.ajax({
			url: "libs/php/getTimeZoneInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#lat').val(),
				lng: $('#lng').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#showdata').html(result.data['sunrise']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log(jqXHR);
			}
		}); 
	
	});

	$('#btnRun2').click(function() {

		$.ajax({
			url: "libs/php/getStreetNameLookup.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#lat1').val(),
				lng: $('#lng1').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#showdata1').html(result.data['countryCode']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log(jqXHR);
			}
		}); 
	
	});


	$('#btnRun3').click(function() {

		$.ajax({
			url: "libs/php/getNearByWeather.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#lat2').val(),
				lng: $('#lng2').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#showdata3').html(result.data['elevation']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log(jqXHR);
			}
		}); 
	
	});

	$('#btnRun4').click(function() {

		$.ajax({
			url: "libs/php/getStreetNameLookup.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#lat4').val(),
				lng: $('#lng4').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#showdata4').html(result.data['adminName1']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log(jqXHR);
			}
		}); 
	
	});