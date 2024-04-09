import data from '../data/dataset.js';
import { MainDescription } from '../components/mainDescription.js';

export const TourLayout = (objName) => {
  const tourLayout = document.createElement("div"); //div all page

  const infoTour = data.find(element => element.name === objName.name);
  const main = MainDescription(infoTour);
  tourLayout.append(main);

  return tourLayout;
}