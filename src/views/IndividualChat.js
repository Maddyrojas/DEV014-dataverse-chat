
import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";
import { MainChatTours } from "../components/mainTours.js";
import data from '../data/dataset.js';
import { communicateWithOpenAI } from "../lib/openAIApi.js";

const mainChatElement = MainChatTours();
const headerElement = Header();
const footerElement = Footer();

const divChatZone = mainChatElement.querySelector('div[id="chat-zone"]');

function enterMessage(msj) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', type);
  messageElement.innerHTML = `<strong>MADELYN:</strong> ${msj}`;
  divChatZone.appendChild(messageElement);
  //chatContainer.scrollTop = chatContainer.scrollHeight;
  console.log(msj);
}

function enterResponse(msj) {
  console.log(msj);
}

export function autoExpand(element) {
  element.style.height = 'auto';
  element.style.height = (element.scrollHeight) + 'px';
  if (element.scrollHeight > 300) {
    element.style.overflowY = 'scroll'; // Agregar barra de desplazamiento
    element.style.height = '300px'; // Establecer la altura máxima
  } else {
    element.style.overflowY = 'hidden'; // Ocultar la barra de desplazamiento si no se necesita
  }
}

export const IndividualChat = (objTour) => {
  const individualChat = document.createElement("div");

  const divInfoLaptop = mainChatElement.querySelector('div[id="infOnPC"]');
  const btnSendMsj = mainChatElement.querySelector('button[class="btn-sendMsj"]');
  const textArea = mainChatElement.querySelector("textArea");


  const infoTour = data.find(tour => tour.name === objTour.name);

  divInfoLaptop.querySelector("h1").textContent = infoTour.name;
  divInfoLaptop.querySelector("img").src = infoTour.imageUrl;


  //----------EVENT----------//
  btnSendMsj.addEventListener('click', () => {
    const userPrompt = textArea.value;
    textArea.value = '';
    enterMessage(userPrompt);
    enterResponse(communicateWithOpenAI(infoTour, userPrompt));
  });


  individualChat.append(headerElement, mainChatElement, footerElement);
  return individualChat;
}