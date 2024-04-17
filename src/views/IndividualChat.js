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
  messageElement.innerHTML = `<strong>MADELYN:</strong>&nbsp${msj}`;
  divChatZone.appendChild(messageElement);
}

export const IndividualChat = (objName) => {
  const individualChat = document.createElement("div"); //div all page
  individualChat.classList.add("mainContainer");
  //const divFirstMsj = document.createElement('div');

  const divInfoLaptop = mainChatElement.querySelector('div[class="mainDiv"]');
  const btnSendMsj = mainChatElement.querySelector('button[class="btn-sendMsj"]');
  const textArea = mainChatElement.querySelector("textArea");
  
  const guideImg = mainChatElement.querySelector('img[class="guide-img"]');
  const guideGreat = mainChatElement.querySelector ('p[class="guide-greating"]');
  const infoTour = data.find(tour => tour.name === objName.name);

  divInfoLaptop.querySelector("h1.placeName").textContent = infoTour.name;
  divInfoLaptop.querySelector("img.img-place").src = infoTour.imageUrl;
  guideGreat.textContent = `Hola yo soy ${infoTour.guideName}, ¡Bienvenid@s a ${infoTour.name}! hoy sere tu guía, por favor no te guardes ninguna duda...`;
  guideImg.src = infoTour.guideImg;

  //----------EVENT----------//
  btnSendMsj.addEventListener('click', () => {
    const userPrompt = textArea.value;
    textArea.value = '';
    enterMessage(userPrompt);
    communicateWithOpenAI(infoTour, userPrompt)
      .then(response => {
        const messageElement = document.createElement('div');
        messageElement.classList.add("enterResponse");
        messageElement.innerHTML = `<img id="guide-img-chat" class="guide-img" src=${infoTour.guideImg}>&nbsp &nbsp <strong>${infoTour.guideName}: </strong>&nbsp${response}`;
        divChatZone.appendChild(messageElement);
      })
      .catch(error => {
        console.error('Error:', error);
      })
  });

  individualChat.append(navindividualchatElement, mainChatElement, footerElement);
  return individualChat;
}