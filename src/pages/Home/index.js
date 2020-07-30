import React from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';

import dadosIniciais from '../../data/dados_iniciais.json';

//iniciando um array do objeto retornado
const {categorias} = dadosIniciais

console.log(categorias)
function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu/>
      <BannerMain
        videoTitle={categorias[0].videos[0].titulo}
        url={categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />
      {/* {categorias.map(categoria => {
        return(
          <Carousel ignoreFirstVideo
          category={categoria} />
        )
      })} */}

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />      
      <Footer/>
    </div>
  );
}

export default Home;
