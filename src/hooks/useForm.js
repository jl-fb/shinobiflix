import { useState } from 'react';

// NOTE CUSTOM HOOK
function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);
  const setValue = (chave, valor) => {
    setValues({
      ...values,
      [chave]: valor,
    });
  };

  const handleChange = (infosDoEvento) => {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  };

  const clearForm = (valoresIniciais) => setValues(valoresIniciais);

  return {
    handleChange,
    values,
    clearForm,
  };
}

export default useForm;
