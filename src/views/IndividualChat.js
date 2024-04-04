
import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";
import { MainTours } from "../components/mainTours.js";

const mainToursElement = MainTours();
const headerElement = Header();
const footerElement = Footer();

export const IndividualChat = (idTour) => {
  const individualChat = document.createElement("div");
  individualChat.append(headerElement, mainToursElement, footerElement);
  return individualChat;
}