import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";
import { MainHome } from "../components/mainHome.js";
import data from "../data/dataset.js";
import { filterData, sortData, computeStats } from '../lib/dataFunction.js';
import { navigateTo } from "../router.js";
import { setApiKey, getApiKey } from "../lib/apiKey.js"
const mainHomeElement = MainHome();
const headerElement = Header();
const footerElement = Footer();
const modal = document.getElementById("modal");

function renderComputeStats(data) {
  const arrCompute = computeStats(data);
  mainHomeElement.querySelector('strong[id="aventura"]').innerHTML = ((arrCompute.find(typeTour => typeTour.tipoTurismo === "turismo de aventura")).porcentaje).toFixed(2) + "%";
  mainHomeElement.querySelector('strong[id="playa"]').innerHTML = ((arrCompute.find(typeTour => typeTour.tipoTurismo === "turismo de playa")).porcentaje).toFixed(2) + "%";
  mainHomeElement.querySelector('strong[id="cultura"]').innerHTML = ((arrCompute.find(typeTour => typeTour.tipoTurismo === "turismo cultural")).porcentaje).toFixed(2) + "%";
}

function renderItems(dataset) {
  const content = mainHomeElement.querySelector('#root');
  const ul = document.createElement('ul');
  ul.setAttribute('name', 'ul-root');
  
  if (content.hasChildNodes()) { // If it has child
    content.innerHTML = '';
  }
  
  dataset.forEach(function (element) {
    const list = document.createElement('li');
    list.setAttribute('itemscope', '');
    list.setAttribute('itemtype', element.name);
    list.classList.add('card');
    list.innerHTML = `
      <dl>
        <div class="divImage"><img src=${element.imageUrl} alt=${element.name} class="imagine-cutted"/></div>
        <div class="divName"><dd itemprop="name">${element.name}</dd></div>
        <div class="divStars"> <img src="https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/01c79ef9f70a89e36ef48ce985bc36e527598bef/Imagenes%20Dataverse/05-icon-stars.svg" alt="Star 1">  <img src="https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/01c79ef9f70a89e36ef48ce985bc36e527598bef/Imagenes%20Dataverse/05-icon-stars.svg" alt="Star 2">  <img src="https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/01c79ef9f70a89e36ef48ce985bc36e527598bef/Imagenes%20Dataverse/05-icon-stars.svg" alt="Star 3">  <img src="https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/01c79ef9f70a89e36ef48ce985bc36e527598bef/Imagenes%20Dataverse/05-icon-stars.svg" alt="Star 4"></div>
        <div class="divPrecio"><dt itemprop="gastoPromedio">$${element.gastoPromedio}<span>gasto promedio diario</span></dt></div>
        <div class="divDescription"><dt></dt><dd itemprop="shortDescription">${element.shortDescription}</dd></div>
        <button class="btnChat">CHATEA CONMIGO</button> 
        <button id="btnInfo">SABER MAS</button>
      </dl>
      `;
    ul.appendChild(list);
    const btnChat = list.querySelector('button[class="btnChat"]');
    const btnInfo = list.querySelector('button[id="btnInfo"]');
    btnChat.addEventListener('click', () => {
      if (getApiKey() === null) {
        modal.style.display = "block";
        alert("Por favor, introduce la ApiKey");
      }
      else {
        navigateTo('/chat', { name: element.name });
      }
    });
    btnInfo.addEventListener('click', () => {
      navigateTo('/tour', { name: element.name })
    });   
  });
  content.appendChild(ul);
  return content;
}


export const Home = () => {
  const home = document.createElement("div");
  let newData = data;
  //---------------SELECTOR EVENT-------------------//
  const filterProvincia = mainHomeElement.querySelector('select[name="filtrarProvincia"]');
  const sortOption = mainHomeElement.querySelector('select[name="ordenar"]');
  const sortAsc = mainHomeElement.querySelector('input[value="asc"]');
  const sortDesc = mainHomeElement.querySelector('input[value="desc"]');
  const btnLimpiar = mainHomeElement.querySelector('button[data-testid="button-clear"]');
  const btnHeader = headerElement.querySelector('button[name="btn-header"]');
  const textSearch = headerElement.querySelector('#search-header');
  const btnPanel = headerElement.querySelector('button[name="btn-grupChat"]');
  const filterZone = mainHomeElement.querySelector('div[name="filter-zone"]');
  const liContact = headerElement.querySelector('li[id="li"]');

  //---------------SELECTOR MODAL-------------------//
  const closemodal = document.getElementById("close-modal");
  const btnApi = document.querySelector('button[type="submit"]');
  const chexApi = document.getElementById("miCheckbox");
  const textApi = document.getElementById("apikey");
  const textName = document.getElementById("name");
  
  //------------INITIAL CHARGE------------//
  if (getApiKey() === null) {
    modal.style.display = "block";
  }
  renderItems(sortData(newData, sortOption.value, sortAsc.value));
  renderComputeStats(newData);
  
  //------------EVENT MODAL------------//
  btnApi.addEventListener('click', () => {
    modal.style.display = "none";
    setApiKey(textApi.value);
    if (textApi.value) {
      alert(textName.value+" Tu ApiKey es correcta \n\n\nBienvenida a Pura Vida Tours");
    }
    textSearch.value=textName.value;// name
  });

  chexApi.addEventListener('change', () => {
    if(chexApi.checked) {
      textApi.value="r289RVyc1xkxrxrhtPgRT3BlbkFJohL38inFU392VV27zXuW";
    } else {
      textApi.value="";
    }
  });

  closemodal.addEventListener('click', () => {
    modal.style.display = "none";
  });

  //------------EVENT HEADER------------//
  btnHeader.addEventListener('click', () => {
    filterZone.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  btnPanel.addEventListener('click', () => {
    if (getApiKey() === null) {
      modal.style.display = "block";
      alert("Por favor, introduce la ApiKey");
    } else {
      navigateTo('/panel');
    }
  });

  liContact.addEventListener('click', () => {
    footerElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  //------------EVENT MAIN------------//
  filterProvincia.addEventListener('change', () => {
    if (filterProvincia.value === 'All Options') {
      newData = data;
      if (sortAsc.checked) {
        renderItems(sortData(newData, sortOption.value, sortAsc.value));
      } else {
        renderItems(sortData(newData, sortOption.value, sortDesc.value));
      }
      renderComputeStats(newData);
    } else { // si es por filtro de location
      newData = filterData(data, 'location', filterProvincia.value); // llama el metodo filtrar y lo asigna a dataOriginFilter
      if (sortAsc.checked) {
        renderItems(sortData(newData, sortOption.value, sortAsc.value)); // filtrar y ordenar por lo seleccionado
      } else {
        renderItems(sortData(newData, sortOption.value, sortDesc.value));
      }
      renderComputeStats(newData);
    }
  });

  sortOption.addEventListener('change', () => {
    if (sortAsc.checked) {
      renderItems(sortData(newData, sortOption.value, sortAsc.value));
    }
    if (sortDesc.checked) {
      renderItems(sortData(newData, sortOption.value, sortDesc.value));
    }
  });

  sortAsc.addEventListener('click', (event) => {
    renderItems(sortData(newData, sortOption.value, event.target.value));
  });

  sortDesc.addEventListener('click', (event) => {
    renderItems(sortData(newData, sortOption.value, event.target.value));
  });

  btnLimpiar.addEventListener('click', () => {
    filterProvincia.selectedIndex = 0;
    sortOption.selectedIndex = 0;
    sortAsc.checked = true;
    newData = data;
    renderItems(sortData(newData, sortOption.value, sortAsc.value));
    renderComputeStats(newData);
  });

  //------------EVENT FOOTER------------//
  footerElement.querySelector('button[name="btn-subcrip"]').addEventListener('click', () => {
    filterZone.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  
  home.append(headerElement, mainHomeElement, footerElement);
  return home;
}