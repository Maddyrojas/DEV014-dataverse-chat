import { Nav } from "../components/nav.js";
// import { Footer } from "./../components/footer.js";
import { MainChatTours } from "../components/mainTours.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";
import data from '../data/dataset.js';
//import { filterData } from '../lib/dataFunctions.js';
const main = MainChatTours();
const header = Nav("HELP");
const divChatZone = main.querySelector('div[id="chat-zone"]');

export const GroupChat = () => {
  const btnSendMsj = main.querySelector('button[class="btn-sendMsj"]');
  const textArea = main.querySelector("textArea");

  const groupChat = document.createElement("div");
  groupChat.classList.add("groupChatView");
  const contentGroupChat = document.createElement("div");
  contentGroupChat.innerHTML = `
    <p class="groupChatGreeting">¡Hola! Bienvenid@ a Costa Rica ¿En que podemos servirte?</p>
    <div class="image-guides-grid">
      <img src="" alt="01-puntaArenasGuide" id="iconPlaya" class="img-guides"/>
      <img src="" alt="02-sanJoseGuide" id="iconPlaya" class="img-guides"/>
      <img src="" alt="03-alajuelaGuide" id="iconPlaya" class="img-guides"/>
      <img src="" alt="04-cartagoGuide" id="iconPlaya" class="img-guides"/>
      <img src="" alt="05-guanacasteGuide" id="iconPlaya" class="img-guides"/>
      <img src="" alt="06-limonGuide" id="iconPlaya" class="img-guides"/>
    </div>
    <input type="text" placeholder="Toma el Sol">
    <input type="text" placeholder="Camina por senderos">
    <input type="text" placeholder="Maravillate">
    <input type="text" placeholder="Disfruta tu viaje">
    <div id="cajaSalida"></div>
    <input type="text" id="cajaEntrada" placeholder="Escribe aquí">
    `;//incluir todo lo demas

  btnSendMsj.addEventListener('click', () => {
    const userPrompt = textArea.value;
    textArea.value = '';
    enterMessage(userPrompt);
    
    const allMsj = data.map((item) => {
      return [communicateWithOpenAI(item, userPrompt), item.name]
    });
    Promise.all(allMsj).then(response => {
      enterResponse(response);
    })
      .catch(error => {
        console.error('Erro:', error);
      });
  });
  groupChat.append(header,contentGroupChat, main);
  return groupChat;
};

function enterMessage(msj) {
  const messageElement = document.createElement('div');
  messageElement.classList.add("enterMessage");
  messageElement.innerHTML = `<strong>MADELYN:</strong> ${msj}`;
  divChatZone.appendChild(messageElement);
  //chatContainer.scrollTop = chatContainer.scrollHeight;
  console.log(msj);
}

function enterResponse(array) {
  array.forEach(item => {
    item[0].then(response =>{
      const messageElement = document.createElement('div');
      messageElement.classList.add("enterResponse");
      messageElement.innerHTML = `<strong>${item[1]}</strong> ${response}`;
      divChatZone.appendChild(messageElement);
    })
  });
}