import BASE_URL from '../environments/environment';

const URL_CATEGORIAS = `${BASE_URL}/categorias`;
const getCategoriasWithVideos = () => fetch(`${URL_CATEGORIAS}?_embed=videos`)
  .then((resp) => {
    if (resp.ok) {
      const data = resp.json();
      return data;
    }
    throw new Error('Não foi possível pegar os dados :(');
  });

export default {
  getCategoriasWithVideos,
};
