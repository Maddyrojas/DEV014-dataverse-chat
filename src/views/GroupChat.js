import { Header } from "../components/header.js";
import { Footer } from "./../components/footer.js";
//import data from "./data/dataset.js";
//import { filterData } from '../lib/dataFunctions.js';

export const GroupChat = () => {
  const groupChat = document.createElement("div");
  groupChat.classList.add("groupChatView");
  groupChat.append(Header());
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
    `//incluir todo lo demas
  groupChat.append(contentGroupChat);
  groupChat.append(Footer());
  return groupChat;
}