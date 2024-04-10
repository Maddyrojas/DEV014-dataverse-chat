import { Footer } from "../components/footer.js";
import { MainChatTours } from "../components/mainTours.js";
import data from '../data/dataset.js';
import { communicateWithOpenAI } from "../lib/openAIApi.js";
import { NavIndividualChat } from "../components/navindividualchat.js";

const mainChatElement = MainChatTours();
const footerElement = Footer();
const navindividualchatElement = NavIndividualChat();

const divChatZone = mainChatElement.querySelector('div[id="chat-zone"]');

function enterMessage(msj) {
  const messageElement = document.createElement('div');
  messageElement.classList.add("enterMessage");
  messageElement.innerHTML = `<strong>MADELYN:</strong> ${msj}`;
  divChatZone.appendChild(messageElement);
  //chatContainer.scrollTop = chatContainer.scrollHeight;
  console.log(msj);
}

export const IndividualChat = (objName) => {
  const individualChat = document.createElement("div"); //div all page
  const divFirstMsj = document.createElement('div');

  const divInfoLaptop = mainChatElement.querySelector('div[class="mainDiv"]');
  const btnSendMsj = mainChatElement.querySelector('button[class="btn-sendMsj"]');
  const textArea = mainChatElement.querySelector("textArea");

  const infoTour = data.find(tour => tour.name === objName.name);

  divInfoLaptop.querySelector("h1.placeName").textContent = infoTour.name;
  divInfoLaptop.querySelector("img.img-place").src = infoTour.imageUrl;

  divFirstMsj.classList.add("enterResponse");
  divFirstMsj.innerHTML = `<strong>System:</strong> Hola yo soy ${infoTour.name}, te invito a conocerme por medio de tus consultas, por favor no te guardes ninguna duda...`;
  divChatZone.appendChild(divFirstMsj);

  //----------EVENT----------//
  btnSendMsj.addEventListener('click', () => {
    const userPrompt = textArea.value;
    textArea.value = '';
    enterMessage(userPrompt);
    communicateWithOpenAI(infoTour, userPrompt)
      .then(response => {
        const messageElement = document.createElement('div');
        messageElement.classList.add("enterMessage");
        messageElement.innerHTML = `<strong>SYSTEM:</strong> ${response}`;
        divChatZone.appendChild(messageElement);
      })
      .catch(error => {
        console.error('Error:', error);
      })
  });

  individualChat.append(navindividualchatElement, mainChatElement, footerElement);
  return individualChat;
}