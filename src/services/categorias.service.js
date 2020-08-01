import BASE_URL from '../environments/environment';

const URL_CATEGORIAS = `${BASE_URL}/categorias`;

const getAll = () => fetch(URL_CATEGORIAS)
  .then(async resp => {
   
    if (resp.ok) {
      const data = await resp.json();
      console.log(data)
      return data;
    }
    throw new Error('Não foi possível pegar os dados :(');
  });
const getCategoriasWithVideos = () => fetch(`${URL_CATEGORIAS}?_embed=videos`)
  .then(async (resp) => {
    if (resp.ok) {
      const data = await resp.json();
      return data;
    }
    throw new Error('Não foi possível pegar os dados :(');
  });

export default {
  getCategoriasWithVideos,
  getAll,
};
