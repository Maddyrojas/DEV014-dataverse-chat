import { Header } from "../components/header.js";
import { Footer } from "./../components/footer.js";
//import data from "./data/dataset.js";
//import { filterData } from '../lib/dataFunctions.js';

export const Home = () => {
    const home = document.createElement("div");
    //home.classList.add("");

    //incluir todo lo demas
    home.append(Header(),Footer());
    return home;
}