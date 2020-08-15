const baseUrl = 'https://restcountries.eu/rest/v2/name/';

export default {
  page: 1,
  fechArticles(query) {
    const requestParams = `${query}`;

    // console.log('baseUrl + requestParams', baseUrl + requestParams);
    return fetch(baseUrl + requestParams).then(response => {
      return response.json();
    });
  },
};
