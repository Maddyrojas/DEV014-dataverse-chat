export const getApiKey = () => { //get
  const apiKey = localStorage.getItem('apiKey');
  return apiKey;
};

export const setApiKey = (key) => {
  if (key) {
    localStorage.setItem('apiKey', key);// Guarda la API KEY en Local Storage
  } else { //if the key is not valid
    localStorage.removeItem('apiKey');//elimina la API KEY de Local Storage
  }
};