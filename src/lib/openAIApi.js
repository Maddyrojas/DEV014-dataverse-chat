import { getApiKey } from "./apiKey.js";

export const communicateWithOpenAI = (tour, prompt) => {
  console.log('ejecucion del fetch')
  //console.log(prompt, tour.name, getApiKey());
  const key = getApiKey();
  //console.log(key);
  const configOpenAI = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo-1106',
      messages: [
        {
          role: "system",
          content: `You are: an expert touristic guide from ${tour.name} de Costa Rica, you are living near to the touristic place, you love to be a touristic guide and you define yourself as kind and relax`,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.3,
    }),
  };
  return fetch('https://api.openai.com/v1/chat/completions', configOpenAI)
    .then(response => {
      if (!response.ok) {
        if (response.status === 401) {
          // Si la clave de API está caducada o no es válida
          throw new Error('ApiKey is not valid');
        }
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then(data => {
      console.log('Data received from OpenAI:', data);
      return data.choices[0].message.content;
    }).catch(error => {
      throw error
    });
};
