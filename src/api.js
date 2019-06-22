let apiKey = '93f7132950bc220f2c793daef8c6ad21';

function get(url, data) {
    url = new URL(url);
    data = Object.assign({api_key: apiKey}, data);
    Object.keys(data).forEach(key => url.searchParams.append(key, data[key]));
    return fetch(url, {method: 'GET'})
        .then(response => response.json())
}

export function genres(type) {
    switch (type) {
        case 'movie':
            return get(`https://api.themoviedb.org/3/genre/movie/list`);
        case 'tv':
            return get(`https://api.themoviedb.org/3/genre/tv/list`);
        default:
            return function () {
                get(`https://api.themoviedb.org/3/genre/movie/list`);
                get(`https://api.themoviedb.org/3/genre/type/list`);
            }
    }
}