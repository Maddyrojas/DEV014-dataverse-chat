import { Nav } from "./nav.js";

export const Header = () => {
  const navElement = Nav("CONTACT");
  const header = document.createElement("header");
  header.innerHTML = `   
    <div class="top-page">
        <div class="nav-zone">
            <div id ="enterNav"></div>
            <input type="search" name="search-header" id="search-header" placeholder="¿Qué lugar estas buscando?">
            <button class="btn-grupChat" name="btn-grupChat">CHAT GRUPAL</button>
        </div>
        <h1>Costa Rica te enamora</h1>
        <em class="text-welcome">Conocé los mejores rincones de nuestro país, descrubriendo todas las actividades que Costa Rica nos ofrece para hacer y disfrutar.</em>
        <button class="btn-header" name="btn-header">SABER MÁS</button>
    </div>
    `;
  
  //-----------select header ------------//
  const enterNav = header.querySelector('div[id="enterNav"]');
  const navHome = navElement.querySelector('nav[class="nav-mobile"]');
  navHome.style.backgroundImage = 'none';
  enterNav.appendChild(navElement);
  return header;
};