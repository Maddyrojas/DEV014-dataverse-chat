import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";
import { MainHome } from "../components/mainHome.js";
import data from "../data/dataset.js";
import { filterData, sortData, computeStats } from '../lib/dataFunction.js';

export const Home = () => {
  const home = document.createElement("div");
  home.classList.add("homeclass");
document.addEventListener('DOMContentLoaded', () => {
  let newData = data;
  const mainHomeElement = MainHome();
  const content = mainHomeElement.querySelector('#root');
  const filterProvincia = mainHomeElement.querySelector('select[name="filtrarProvincia"]');
  const sortOption = mainHomeElement.querySelector('select[name="ordenar"]');
  const sortAsc = mainHomeElement.querySelector('input[value="asc"]');
  const sortDesc = mainHomeElement.querySelector('input[value="desc"]');
  const btnLimpiar = mainHomeElement.querySelector('button[data-testid="button-clear"]');
  const btnHeader = mainHomeElement.querySelector('button[name="btn-header"]');
  const filterZone = mainHomeElement.querySelector('div[name="filter-zone"]');
  content.appendChild(renderItems(sortData(data, sortOption.value, sortAsc.value)));
  renderComputeStats(newData);
  home.append(Header(), mainHomeElement, Footer());
  /*
Evento Filtrar por provincia
Escucha los cambios en el select de filtrarProvincia
tambien conserva la condicion del evento ordenar
*/
filterProvincia.addEventListener('change', () => {
  mainHomeElement.querySelector('ul[name="ul-root"]').remove();
  if (filterProvincia.value === 'All Options') { // Si es todas las opciones
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

/*
Evento ordenar por Nombre o Precio
Primero verifica la seleccion del radio (si es ascendente o descendente)
Segundo verifica si la data esta filtrada por location o si la seleccion es de todas las opciones
*/
sortOption.addEventListener('change', () => {
  mainHomeElement.querySelector('ul[name="ul-root"]').remove();
  if (sortAsc.checked) {
    content.appendChild(renderItems(sortData(newData, sortOption.value, sortAsc.value)));
  }
  if (sortDesc.checked) {
    content.appendChild(renderItems(sortData(newData, sortOption.value, sortDesc.value)));
  }
});

/*
Evento click por ascendente
Verifica si son todas las opciones o si esta filtrada por location
Y finalmente muestra una data ordenada de forma ascendente
*/
sortAsc.addEventListener('click', (event) => {
  mainHomeElement.querySelector('ul[name="ul-root"]').remove();
  content.appendChild(renderItems(sortData(newData, sortOption.value, event.target.value)));
});

/*
Evento click por descendente
Verifica si son todas las opciones o si esta filtrada por location
Y finalmente muestra una data ordenada de forma descendente
*/
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

mainHomeElement.querySelector('button[name="btn-subcrip"]').addEventListener('click', () => {
  filterZone.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

function renderItems(data) {
  const ul = mainHomeElement.createElement('ul');
  ul.setAttribute('name', 'ul-root');
  data.forEach(function (element) {
    const list = mainHomeElement.createElement('li');
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

function renderComputeStats(data) {
  const arrCompute = computeStats(data);
  mainHomeElement.querySelector('strong[id="aventura"]').innerHTML = ((arrCompute.find(typeTour => typeTour.tipoTurismo === "turismo de aventura")).porcentaje).toFixed(2) + "%";
  mainHomeElement.querySelector('strong[id="playa"]').innerHTML = ((arrCompute.find(typeTour => typeTour.tipoTurismo === "turismo de playa")).porcentaje).toFixed(2) + "%";
  mainHomeElement.querySelector('strong[id="cultura"]').innerHTML = ((arrCompute.find(typeTour => typeTour.tipoTurismo === "turismo cultural")).porcentaje).toFixed(2) + "%";
}
});

  return home;
};