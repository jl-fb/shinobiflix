import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasService from '../../../services/categorias.service';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);

  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  useEffect(() => {
    categoriasService.getAll().then((resp) => setCategorias(resp));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('categoria cadastrada', values);

    categoriasService
      .create({
        titulo: values.titulo,
        descricao: values.descricao,
        cor: values.cor,
      })
      .then(() => {
        console.log('categoria cadastrada');
        clearForm(valoresIniciais);
      });
  };

  return (
    <PageDefault>
      <h1>Cadastro de Categoria:</h1>

      <form onSubmit={onSubmit}>
        <FormField
          label="Nome da Categoria:"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor:"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
        {categorias.length === 0 && <div>Loading...</div>}
        {/* <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.titulo}${categoria.id}`}>{categoria.titulo}</li>
          ))}
        </ul> */}
      </form>
      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
