import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videoService from '../../../services/videos.service'
import categoriasService from '../../../services/categorias.service'

function CadastroVideo() {
  // NOTE react libs
  const HISTORY = useHistory()
  const [categorias, setCategorias] = useState([])

  
    // const suggestions = categorias.map((categoria) => categoria.titulo)
  const categoriasTitulo = categorias.map(({titulo}) => titulo)

  // NOTE HOOKS MEUS
  const { handleChange, values } = useForm({
    categoria: '',
    titulo: '',
    url: ''
  });  


  useEffect(() => {
    categoriasService.getAll()
      .then((resp) => {setCategorias(resp)})
  }, [])
 

 
  const onSubmit = (e) =>{
    e.preventDefault()

    const categoriaEscolhida = categorias.find((categoria) => {
      return categoria.titulo === values.categoria
    })
    console.log('CATEGORIA ESCOLHID', categoriaEscolhida)

    videoService.create({
      titulo: values.titulo,
      url: values.url,
      categoria: categoriaEscolhida.id,
    })
      .then(() => {
      
        // TODO VALIDAR FORM E FAZER LOADING
        HISTORY.push('/')
      }
       
      )
      
  }
 
  return (
    <PageDefault>
      <h1>Cadastro de vídeos</h1>
      <form onSubmit={onSubmit}>
        
        
        <FormField
          label="Nome do vídeos:"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label="URL:"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria:"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoriasTitulo}
        />

        <Button>Cadastrar</Button>

      </form>

      <Link to="/cadastro/categoria">
        Link para cadastro
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
