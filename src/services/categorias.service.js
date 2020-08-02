import BASE_URL from '../environments/rotas';

const URL_CATEGORIAS = `${BASE_URL}/categorias`;

const getAll = () =>
  fetch(URL_CATEGORIAS).then(async (resp) => {
    if (resp.ok) {
      const data = await resp.json();
      console.log(data);
      return data;
    }
    throw new Error('Não foi possível pegar os dados :(');
  });
const getCategoriasWithVideos = () =>
  fetch(`${URL_CATEGORIAS}?_embed=videos`).then(async (resp) => {
    if (resp.ok) {
      const data = await resp.json();
      return data;
    }
    throw new Error('Não foi possível pegar os dados :(');
  });

const create = (categoria) => {
  console.log('CATEGORIA', categoria);
  return fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categoria),
  }).then(async (resp) => {
    if (resp.ok) {
      const data = await resp.json();
      return data;
    }
    throw new Error('Não foi possível cadastrar a categoria');
  });
};

export default {
  getCategoriasWithVideos,
  getAll,
  create,
};
