
import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";
import { MainChatTours } from "../components/mainTours.js";
import data from '../data/dataset.js';
import { communicateWithOpenAI } from "../lib/openAIApi.js";

const mainChatElement = MainChatTours();
const headerElement = Header();
const footerElement = Footer();

function enterMessage(msj){
  console.log(msj);
}

function enterResponse(msj){
  console.log(msj);
}
export const IndividualChat = (objTour) => {
  const individualChat = document.createElement("div");

  const divInfoLaptop = mainChatElement.querySelector('div[id="infOnPC"]');
  const btnSendMsj = mainChatElement.querySelector('button[class="btn-sendMsj"]');
  const textArea = mainChatElement.querySelector("textArea");


  const infoTour = data.find(tour => tour.name === objTour.name);

  divInfoLaptop.querySelector("h1").textContent=infoTour.name;
  divInfoLaptop.querySelector("img").src = infoTour.imageUrl;


  //----------EVENT----------//
  btnSendMsj.addEventListener('click', () => {
    const userPrompt = textArea.value;
    textArea.value = '';
    enterMessage(userPrompt);
    enterResponse(communicateWithOpenAI(infoTour, userPrompt));
  });


  individualChat.append(headerElement, mainChatElement, footerElement);
  console.log(name);
  return individualChat;
}