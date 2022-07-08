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
				lat1: $('#lat').val(),
				lng1: $('#lng').val()
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
			url: "libs/php/getNeighbourhood.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat1: $('#lat').val(),
				lng1: $('#lng').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#showdata1').html(result.data['neighbourhood']['adminName2']);

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
			url: "libs/php/getChildren.php",
			type: 'POST',
			dataType: 'json',
     		data: {
				geonameId: $('#geoid').val(),
				geonameId: $('#geoid').val(),
			},
			success: function(result) {

				console.log(JSON.stringify(result.data[0].asciiName));
				console.log(JSON.stringify(result.data[1].asciiName));
				console.log(JSON.stringify(result.data[2].asciiName));
				console.log(JSON.stringify(result.data[3].asciiName));

				if (result.status.name == "ok") {

					$('#showdata2').html(result.data['totalResultsCount']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log(jqXHR);
			}
		}); 
	
	});   
	

	
  