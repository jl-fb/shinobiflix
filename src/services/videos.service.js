import BASE_URL from '../environments/rotas';

const URL_VIDEOS = `${BASE_URL}/videos`;
const create = (video) =>
  fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(video),
  }).then((resp) => {
    if (resp.ok) {
      const data = resp.json();
      return data;
    }
    throw new Error('Não foi possível pegar os dados :(');
  });

export default {
  create,
};
