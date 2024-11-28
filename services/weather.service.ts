import configData from '@/utils/config.data';

async function getWeather() {
    const { api, key, lat, lon } = configData;
    const query = `${api}/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    const request = new Request(query, {
        method: 'GET',
    });
    const response = await fetch(request);

    if (!response.ok) {
        throw new Error('Something went wrong with server, please try again.');
    }

    return response.json();
}

async function getForecast() {
    const { api, key, lat, lon } = configData;
    const query = `${api}/forecast?lat=${lat}&lon=${lon}&cnt=16&appid=${key}&units=metric`;
    const request = new Request(query, {
        method: 'GET',
    });

    const response = await fetch(request);

    if (!response.ok) {
        throw new Error('Something went wrong with server, please try again.');
    }

    return response.json();
}

export default {
    getWeather,
    getForecast,
};
