import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import BASE_URL from '../../../environments/environment';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [categoria, setValues] = useState(valoresIniciais);

  function mudarCategoria(chave, valor) {
    setValues({
      ...categoria,
      [chave]: valor,
    });
  }
  function handleChange(infosDoEvento) {
    mudarCategoria(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    fetch(`${BASE_URL}/categorias`)
      .then(async (resp) => {
        const resposta = await resp.json();
        console.log(resposta);
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {categoria.nome}
      </h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategorias([...categorias, categoria]);

        setValues(valoresIniciais);
      }}

      >
        <FormField
          label="Nome da Categoria:"
          type="text"
          name="nome"
          value={categoria.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={categoria.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor:"
          type="color"
          name="cor"
          value={categoria.descricao}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
        {categoria.length === 0 && (
          <div>
            Loading...
          </div>
        )}
        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.titulo}${Math.random(Date.now() * 1)}`}>{categoria.titulo}</li>
          ))}
        </ul>

      </form>
      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
