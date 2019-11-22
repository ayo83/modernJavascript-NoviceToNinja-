const key = 'AccuWeather key goes here';

//Get Weather information
const getWeather = async (cityId) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${cityId}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

//Get City Information
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;


    const response = await fetch(base + query);
    const data = await response.json();

    return data[0]
}



