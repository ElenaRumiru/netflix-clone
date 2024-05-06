const key = 'f708b0c523d35f43f7b1af5ea9ae4387';

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page-1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page-1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page-3`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=horror&include_adult=true&language=en-US&page=3`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page-1`,
};

export default requests;