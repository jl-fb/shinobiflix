import React, { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import categoriasService from '../../services/categorias.service';
import PageDefault from '../../components/PageDefault';
// import dadosIniciais from '../../data/dados_iniciais.json';

// iniciando um array do objeto retornado
function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  useEffect(() => {
    categoriasService.getCategoriasWithVideos()
      .then((data) => {
        setDadosIniciais(data);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, []);
  return (
    <PageDefault paddingAll={0}>

      { dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, i) => {
        if (i === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
              />
              <Carousel
                ignoreFirstVideo
                category={categoria}
              />
            </div>
          );
        }
        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
      ;

    </PageDefault>
  );
}

export default Home;
