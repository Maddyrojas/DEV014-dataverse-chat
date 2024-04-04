export const getApiKey = () => { //get
  const apiKey = localStorage.getItem('apiKey');
  return apiKey;
};

export const setApiKey = (key) => {
  if (key) {
    // Guarda la API KEY en Local Storage
    localStorage.setItem('apiKey', key);
  } else {
    // Si no se proporciona una clave válida, elimina la API KEY de Local Storage
    localStorage.removeItem('apiKey');
  }
};