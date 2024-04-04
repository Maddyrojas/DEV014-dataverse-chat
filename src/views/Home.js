import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";
import { MainHome } from "../components/mainHome.js";
import data from "../data/dataset.js";
import { filterData, sortData, computeStats } from '../lib/dataFunction.js';

const mainHomeElement = MainHome();
const headerElement = Header();
const footerElement = Footer();

function renderComputeStats(data) {
  const arrCompute = computeStats(data);
  mainHomeElement.querySelector('strong[id="aventura"]').innerHTML = ((arrCompute.find(typeTour => typeTour.tipoTurismo === "turismo de aventura")).porcentaje).toFixed(2) + "%";
  mainHomeElement.querySelector('strong[id="playa"]').innerHTML = ((arrCompute.find(typeTour => typeTour.tipoTurismo === "turismo de playa")).porcentaje).toFixed(2) + "%";
  mainHomeElement.querySelector('strong[id="cultura"]').innerHTML = ((arrCompute.find(typeTour => typeTour.tipoTurismo === "turismo cultural")).porcentaje).toFixed(2) + "%";
}

function renderItems(dataset) {
  const ul = document.createElement('ul');
  ul.setAttribute('name', 'ul-root');
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
      <button type="button" id="bntReadMore">Leer Más</button> 
      <button type="button" id="bntProvincia">${element.location}</button>
      </dl>
      `;
    ul.appendChild(list);
  });
  return ul;
}

export const Home = () => {
  const home = document.createElement("div");
  let newData = data;
  const content = mainHomeElement.querySelector('#root');
  const filterProvincia = mainHomeElement.querySelector('select[name="filtrarProvincia"]');
  const sortOption = mainHomeElement.querySelector('select[name="ordenar"]');
  const sortAsc = mainHomeElement.querySelector('input[value="asc"]');
  const sortDesc = mainHomeElement.querySelector('input[value="desc"]');
  const btnLimpiar = mainHomeElement.querySelector('button[data-testid="button-clear"]');
  const btnHeader = headerElement.querySelector('button[name="btn-header"]');
  const textSearch = headerElement.querySelector('#search-header');
  const filterZone = mainHomeElement.querySelector('div[name="filter-zone"]');
  const modal = document.getElementById("modal");
  const closemodal = document.getElementById("close-modal");
  const btnApi = document.querySelector('button[type="submit"]');
  const chexApi = document.getElementById('miCheckbox');
  const textApi = document.getElementById('apikey');
  const textName = document.getElementById('name');
  
  content.appendChild(renderItems(sortData(newData, sortOption.value, sortAsc.value)));
  renderComputeStats(newData);
  
  btnApi.addEventListener('click', () => {
    modal.style.display = "none";
    alert(textName.value+" Tu ApiKey es correcta \n\n\nBienvenida a Pura Vida Tours");
    textSearch.value=textName.value;
  });

  chexApi.addEventListener('change', () => {
    if(chexApi.checked) {
      console.log(textApi);
      textApi.value="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";
    } else {
      textApi.value="";
    }
  });

  closemodal.addEventListener('click', () => {
    modal.style.display = "none";
  });

  filterProvincia.addEventListener('change', () => {
    mainHomeElement.querySelector('ul[name="ul-root"]').remove();
    if (filterProvincia.value === 'All Options') {
      newData = data;
      if (sortAsc.checked) {
        content.appendChild(renderItems(sortData(newData, sortOption.value, sortAsc.value)));
      } else {
        content.appendChild(renderItems(sortData(newData, sortOption.value, sortDesc.value)));
      }
      renderComputeStats(newData);
    } else { // si es por filtro de location
      newData = filterData(data, 'location', filterProvincia.value); // llama el metodo filtrar y lo asigna a dataOriginFilter
      if (sortAsc.checked) {
        content.appendChild(renderItems(sortData(newData, sortOption.value, sortAsc.value))); // filtrar y ordenar por lo seleccionado
      } else {
        content.appendChild(renderItems(sortData(newData, sortOption.value, sortDesc.value)));
      }
      renderComputeStats(newData);
    }
  });

  sortOption.addEventListener('change', () => {
    mainHomeElement.querySelector('ul[name="ul-root"]').remove();
    if (sortAsc.checked) {
      content.appendChild(renderItems(sortData(newData, sortOption.value, sortAsc.value)));
    }
    if (sortDesc.checked) {
      content.appendChild(renderItems(sortData(newData, sortOption.value, sortDesc.value)));
    }
  });

  sortAsc.addEventListener('click', (event) => {
    mainHomeElement.querySelector('ul[name="ul-root"]').remove();
    content.appendChild(renderItems(sortData(newData, sortOption.value, event.target.value)));
  });

  sortDesc.addEventListener('click', (event) => {
    mainHomeElement.querySelector('ul[name="ul-root"]').remove();
    content.appendChild(renderItems(sortData(newData, sortOption.value, event.target.value)));
  });

  btnLimpiar.addEventListener('click', () => {
    mainHomeElement.querySelector('ul[name="ul-root"]').remove();
    filterProvincia.selectedIndex = 0;
    sortOption.selectedIndex = 0;
    sortAsc.checked = true;
    newData = data;
    content.appendChild(renderItems(sortData(newData, sortOption.value, sortAsc.value)));
    renderComputeStats(newData);
  });

  btnHeader.addEventListener('click', () => {
    filterZone.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  
  footerElement.querySelector('button[name="btn-subcrip"]').addEventListener('click', () => {
    filterZone.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  
  home.append(headerElement, mainHomeElement, footerElement);
  return home;
}