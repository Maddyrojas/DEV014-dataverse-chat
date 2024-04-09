export const MainChatTours = () => {
  const individualMain = document.createElement("main");
  individualMain.innerHTML = `
  <img src="iconlines.png" alt="Icono">
  <div id="infOnPC">
    <img src="" alt="Image of the place">
    <h1 class="placeName"></h1>
  </div>
  <div class="greatin-zone">
    <p id="greeting">
      <!-- texto de saludo -->
    </p>
    <div id="guide-img" class="guide-img">
    </div>
  </div>
  <ul class="cloud-zone">
    <li>Diversión</li>
    <li>Aventuras</li>
    <li>Cultura</li>
  </ul>
  <div class="chat-zone" id="chat-zone">
    <div class="enterResponse">
    </div>
    <!-- aqui ingresan div crea los mensajes a travez del evento del boton -->
  </div>
  <div class="aiInteractions">
    <textarea id="userTextArea"></textarea>
    <button class="btn-sendMsj">
      <img src="https://raw.githubusercontent.com/PemRug/DEV014-dataverse-chat/2997f934b10d9d3009c6a8722abcaee1854f74a9/imgs/%F0%9F%A6%86%20icon%20_navigation_.svg" alt="bntIconArrow">
    </button>
  </div>
  <div id="modal" class="modal">
    <div class="modal-IndividualChat" id="infOnMobile">
      <!-- definir que queremos que se muestre -->
    </div>
  </div>
  `;
  return individualMain;
};