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
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <div class="chat-zone" id="chat-zone">
    <!-- aqui ingresan div crea los mensajes a travez del evento del boton -->
  </div>
  <div>
    <textarea></textarea>
    <button type="submit" class="btn-sendMsj"></button>
  </div>
  <div id="modal" class="modal">
    <div class="modal-IndividualChat" id="infOnMobile">
      <!-- definir que queremos que se muestre -->
    </div>
  </div>
  `;
  return individualMain;
};