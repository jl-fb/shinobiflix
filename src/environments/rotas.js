const BASE_URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:5000'
  : 'https://shinobiflix.herokuapp.com';

export default BASE_URL;
