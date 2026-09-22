import { useState, useCallback } from 'react';

/**
 * Validação de formulário instantânea usando a Constraint Validation API
 * nativa do HTML (atributos como required, type="email", minLength) — sem
 * bibliotecas de terceiros. Reaproveitado pelos formulários de cadastro e
 * login do AuthModal.
 */
function useFormAndValidation(initialValues = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = useCallback((event) => {
    const { name, value, validationMessage } = event.target;

    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: validationMessage }));
    setIsValid(event.target.closest('form').checkValidity());
  }, []);

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, []);

  return {
    values, errors, isValid, handleChange, resetForm,
  };
}

export default useFormAndValidation;
