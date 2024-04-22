import data from '../data/dataset.js';
import { MainDescription } from '../components/mainDescription.js';
import { Nav } from "../components/nav.js";
import { navigateTo } from '../router.js';

const header = Nav('CHAT INDIVIDUAL');

export const TourLayout = (objName) => {
  const tourLayout = document.createElement("div"); //div all page
  const infoTour = data.find(element => element.name === objName.name);
  const main = MainDescription(infoTour);
  const liHome = header.querySelector('li[id="li-home"]');
  const liChat = header.querySelector('li[id="li"]');
  
  //Events
  liHome.addEventListener('click', () => {
    navigateTo('/');
  });
  liChat.addEventListener('click', () => {
    navigateTo('/chat', objName);
  });

  tourLayout.append(header, main);
  
  return tourLayout;
}