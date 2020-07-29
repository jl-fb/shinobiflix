import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroCategoria(props) {
  return (
    <PageDefault>
      <h1>Cadastro de categoria</h1>
      <form>
        <label>
          Nome da categoria:
          <input type="text" />
        </label>
        <button type='submit'>Cadastrar</button>
      </form>
      <Link to='/'>Ir para Home</Link>
    </PageDefault>
  )
}

export default CadastroCategoria