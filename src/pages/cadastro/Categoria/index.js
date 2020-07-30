import React, {useState} from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  } 

  const [categorias, setCategorias] = useState([])
  const [categoria, setValues] = useState(valoresIniciais)
  
  function mudarCategoria(chave, valor){
      setValues({
        ...categoria, 
        [chave]: valor, 
      })
  }
    function handleChange(infosDoEvento) {
    mudarCategoria(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }
  
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {categoria.nome}</h1>
      <form onSubmit={function handleSubmit(e){
        e.preventDefault()
        setCategorias([...categorias, categoria])
        
        setValues(valoresIniciais)
      }}>
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
      
        <button >Cadastrar</button>

        <ul>
          {categorias.map((categoria, i) => {
            return(
            <li key={`${categoria}${i}`}>{categoria.nome}</li>
            )
          })}
        </ul>

      </form>
      <Link to='/'>Ir para Home</Link>
    </PageDefault>
  )
}

export default CadastroCategoria