
import {Home} from './views/Home.js';
//import {About} from './views/About.js';
import {GroupChat} from './views/GroupChat.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';
import data from './data/dataset.js';
console.log(data);

const selectRoot = document.getElementById("root");
const routes = {
  '/': Home,
  //'/about' : About,
  '/groupChat' : GroupChat,
};
 
setRoutes(routes); // Assign the routes
//setRootEl(selectRoot);// Root element where views will be rendered

window.addEventListener("DOMContentLoaded", () => {//Make sure you handle the initial page load
    setRootEl(selectRoot);
    onURLChange(window.location);
});
