import { useState } from 'react';

// NOTE CUSTOM HOOK
function useForm(valoresIniciais) {
  const [categoria, setValues] = useState(valoresIniciais);
  const mudarCategoria = (chave, valor) => {
    setValues({
      ...categoria,
      [chave]: valor,
    });
  };

  const handleChange = (infosDoEvento) => {
    mudarCategoria(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  };

  const clearForm = (valoresIniciais) => setValues(valoresIniciais);

  return {
    handleChange,
    categoria,
    clearForm,
  };
}

export default useForm;
