import { Nav } from "../components/nav.js";
// import { Footer } from "./../components/footer.js";
import { MainChatTours } from "../components/mainTours.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";
import data from '../data/dataset.js';
import { navigateTo } from "../router.js";
//import { Guides } from "../components/groupchating.js";
//import { filterData } from '../lib/dataFunctions.js';
const main = MainChatTours();
const header = Nav("HELP");
const divChatZone = main.querySelector('div[id="chat-zone"]');
const imgPlace = main.querySelector('img[class="img-place"]');

export const GroupChat = () => {
  const liHome = header.querySelector('li[id="li-home"]');
  // const liHelp = header.querySelector('li[id="li"]);
  
  liHome.addEventListener('click', () => {
    navigateTo('/');
  });
  const arrowBtn = main.querySelector('img[class="arrowBTN"]');
  //Alajuela
  const alajuelaTour = data.find(tour => tour.location === "Alajuela");
  const alajuelaGuide = main.querySelector('img[id="alajGuide"]');
  const alajNameGuide = main.querySelector('p[id="alajNameGuide"]');
  alajuelaGuide.src = alajuelaTour.guideImg;
  alajNameGuide.textContent = alajuelaTour.guideName;
  //Puntarenas
  const puntArenasTour = data.find(tour => tour.location === "Puntarenas");
  const puntArenasGuide = main.querySelector('img[id="puntGuide"]');
  const puntNameGuide = main.querySelector('p[id="puntNameGuide"]');
  puntArenasGuide.src = puntArenasTour.guideImg;
  puntNameGuide.textContent = puntArenasTour.guideName;
  //San José
  const sanJoseTour = data.find(tour => tour.location === "San José");
  const sanJoseGuide = main.querySelector('img[id="sanJGuide"]');
  const sanjNameGuide = main.querySelector('p[id="sanjNameGuide"]');
  sanJoseGuide.src = sanJoseTour.guideImg;
  sanjNameGuide.textContent = sanJoseTour.guideName;
  //Cartago
  const cartagoTour = data.find(tour => tour.location === "Cartago");
  const cartagoGuide = main.querySelector('img[id="cartagGuide"]');
  const cartNameGuide = main.querySelector('p[id="cartNameGuide"]');
  cartagoGuide.src = cartagoTour.guideImg;
  cartNameGuide.textContent = cartagoTour.guideName;
  //Limón
  const limonTour = data.find(tour => tour.location === "Limón");
  const limonGuide = main.querySelector('img[id="limGuide"]');
  const limonNameGuide = main.querySelector('p[id="limonNameGuide"]');
  limonGuide.src = limonTour.guideImg;
  limonNameGuide.textContent = limonTour.guideName;
  //"Guanacaste"
  const guanacasteTour = data.find(tour => tour.location === "Guanacaste");
  const guanacasteGuide = main.querySelector('img[id="guanaGuide"]');
  const guanaNameGuide = main.querySelector('p[id="guanaNameGuide"]');
  guanacasteGuide.src = guanacasteTour.guideImg;
  imgPlace.style.display = "none";
  arrowBtn.style.backgroundColor= "#fff";
  guanaNameGuide.textContent = guanacasteTour.guideName;


  const groupChat = document.createElement("div");
  groupChat.classList.add("groupChatView");
  const contentGroupChat = document.createElement("div");
  contentGroupChat.innerHTML = `
    <p class="groupChatGreeting">¡Hola! Bienvenid@ a Costa Rica ¿En que podemos servirte?</p>
    `;
  //contentGroupChat.appendChild(Guides(data, main));

  const btnSendMsj = main.querySelector('button[class="btn-sendMsj"]');
  const textArea = main.querySelector("textArea");

  textArea.addEventListener('keydown', (event) => {
    if(event.key === "Enter") {
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
    }
  });

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

function enterResponse(array,) {
  array.forEach(item => {
    item[0].then(response =>{
      const messageElement = document.createElement('div');
      messageElement.classList.add("enterResponse");
      messageElement.innerHTML = `<strong>${item[1]}</strong> ${response}`;
      divChatZone.appendChild(messageElement);
    })
  });
}