//import { getApiKey } from "./apiKey";
//podemos importar el nombre del usuario
const key = "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";

export const communicateWithOpenAI = async (messages, tour) => {
  try{
    const response = await fetch('https://api.openai.com/v1/chat/completions', {//peticion fetch a esa url
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + key,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',// modelo de OpenAI
        messages: [
          { role: "system", content: `Tu eres: un guia de ${tour.name} de Costa Rica, responde de manera corta o breve y pregunta le gustaria saber algo más`,
          },
          {
            role: "user",
            content: messages,
          },
        ],
        max_tokens: 60,
        temperature: 0.9,
      }),
    });
    const messageReturn = await response.json();
    return messageReturn.choices[0].messages.content;
  }
  catch(error){
    console.log(error);
    throw error("Error al comunicarse con OpenAI:", error);
  }
}


// let procesoLento = new Promise((resolve, reject) => {
//     let datos = {};
//     //...
//     //muchas lineas de código
//     //...
//     if (error) {
//       //uh oh, las cosas no salieron tan bien
//       reject(new Error('Fallamos, lo siento'));
//     }
//     //...
//     resolve(datos);
//   });