import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";
const apiKey = "api_key=494545117708aa363456a7464b16d4e6";

const popular = "movie/popular?";
const series = "tv/popular?";
const genres = "tv/popular?";

const getMovies = (url) => {
    return axios.get(`${baseURL}${url}${apiKey}`).then((response) => {
        return response.data;
    });
};

const getmovieDetail = (url, id) => {
    return axios.get(`${baseURL}${url}${id}?${apiKey}`).then((response) => {
        return response.data;
    });
};

const data = {
    popular: getMovies(popular),
    series: getMovies(series),
    genres: getMovies(genres),
    getmovieDetail,
}

export default data;