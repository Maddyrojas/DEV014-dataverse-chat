
import { Home } from './views/Home.js';
import { IndividualChat } from './views/IndividualChat.js';
import { GroupChat } from './views/GroupChat.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';
const selectRoot = document.getElementById("root");
const routes = {
  '/': Home,
  '/individualChat' : IndividualChat,
  '/groupChat': GroupChat,
};

setRoutes(routes); // Assign the routes
//setRootEl(selectRoot);// Root element where views will be rendered

window.addEventListener("DOMContentLoaded", () => {//Make sure you handle the initial page load
  setRootEl(selectRoot);
  onURLChange(window.location);
});
