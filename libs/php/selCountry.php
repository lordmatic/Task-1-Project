<?php
if (!empty($_GET['selCountry'])) {
    /*countryInfo api*/
    $maps_url = 'https://' .
    'api.geoNames.org/selCountry?/' .
        'maps/api/geocode/json' .
        '?address=' . urlencode($_GET['location']);
    $maps_json = file_get_contents($maps_url);
    $maps_array = json_decode($maps_json, true);

    $lat = $maps_array['results'][0]['geometry']['location']['lat'];
    $lng = $maps_array['results'][0]['geometry']['location']['lng'];

    /* countryInfo returned api */
    $url = 'https://' .
    'api.geoNames.org/selCountry/' .
        '?lat=' . $lat .
        '&lng=' . $lng .
        '&client_id=CLIENT-ID'; //replace "CLIENT-ID"

    $json = file_get_contents($url);
    $array = json_decode($json, true);
}
?>