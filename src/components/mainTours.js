export const MainChatTours = () => {
  const individualMain = document.createElement("main");
  individualMain.innerHTML = `
  <div class= "mainDiv">
  <img id=dotsIcon src="https://raw.githubusercontent.com/PemRug/DEV014-dataverse-chat/876f39a5281c0d6954491d1754a1cb70adb6b4f1/imgs/menu-dots_3917763.svg" alt="dotsIcon">
  <div class="greating-zone">
    <img id="guide-img" class="guide-img" src="https://raw.githubusercontent.com/PemRug/DEV014-dataverse-chat/876f39a5281c0d6954491d1754a1cb70adb6b4f1/imgs/menu-dots_3917763.svg" alt="guide">
    <p id="greating" class="guide-greating">
    </p>
    <hr>
  </div>
  
  <div id="infOnPC">
    <img class="img-place" src="" alt="Image of the place">
    <div class="image-guides-grid">
      <img src="" alt="01-puntaArenasGuide" id="puntGuide" class="img-guides"/>
      <p id= "puntNameGuide" class="name-guides"></p>
      <img src="" alt="02-sanJoseGuide" id="sanJGuide" class="img-guides"/>
      <p id= "sanjNameGuide" class="name-guides"></p>
      <img src="" alt="03-alajuelaGuide" id="alajGuide" class="img-guides"/>
      <p id= "alajNameGuide" class="name-guides"></p>
      <img src="" alt="04-cartagoGuide" id="cartagGuide" class="img-guides"/>
      <p id= "cartNameGuide" class="name-guides"></p>
      <img src="" alt="05-guanacasteGuide" id="guanaGuide" class="img-guides"/>
      <p id="guanaNameGuide" class="name-guides"></p>
      <img src="" alt="06-limonGuide" id="limGuide" class="img-guides"/>
      <p id= "limonNameGuide" class="name-guides"></p>
    </div>
  </div>
  <hr class="verticaLine">
  <h1 class="placeName"></h1>
  <ul class="cloud-zone">
    <li>Diversión</li>
    <li>Aventuras</li>
    <li>Cultura</li>
  </ul>
  <div class="chat-zone" id="chat-zone">
  </div>
  <div class="aiInteractions">
    <textarea id="userTextArea"></textarea>
    <button class="btn-sendMsj">
      <img src="https://raw.githubusercontent.com/PemRug/DEV014-dataverse-chat/2997f934b10d9d3009c6a8722abcaee1854f74a9/imgs/%F0%9F%A6%86%20icon%20_navigation_.svg" class="arrowBTN" alt="bntIconArrow">
    </button>
  </div>
    <div class="descrip-IndividualChat" id="infOnDesk">
    </div>
    <div class="modal-IndividualChat" id="infOnMobile">
      <!-- definir que queremos que se muestre -->
    </div>
  </div>
  `;
  return individualMain;
};