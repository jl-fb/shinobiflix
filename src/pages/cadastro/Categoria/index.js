import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import BASE_URL from '../../../environments/environment';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);

  const { categoria, handleChange, clearForm } = useForm(valoresIniciais);

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
        {categoria.titulo}
      </h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategorias([...categorias, categoria]);

        clearForm(valoresIniciais);
      }}

      >
        <FormField
          label="Nome da Categoria:"
          type="text"
          name="titulo"
          value={categoria.titulo}
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
          value={categoria.cor}
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
            <li key={`${categoria.titulo}${categoria.id}`}>{categoria.titulo}</li>
          ))}
        </ul>

      </form>
      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
