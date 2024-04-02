import { Header } from "../components/header.js";
import { Footer } from "./../components/footer.js";
import { MainHome } from "./../components/mainHome.js";
import data from "../data/dataset.js";
import { filterData } from '../lib/dataFunctions.js';

let newData = data;
const content = document.getElementById('root');
const filterProvincia = document.querySelector('select[name="filtrarProvincia"]');
const sortOption = document.querySelector('select[name="ordenar"]');
const sortAsc = document.querySelector('input[value="asc"]');
const sortDesc = document.querySelector('input[value="desc"]');
const btnLimpiar = document.querySelector('button[data-testid="button-clear"]');
const btnHeader = document.querySelector('button[name="btn-header"]');
const filterZone = document.querySelector('div[name="filter-zone"]');

export const Home = () => {
    const home = document.createElement("div");
    home.classList.add("homeclass");
    home.append(Header(),MainHome(),Footer());
    return home;
}

export const renderItems = (data) => {
    const ul = document.createElement('ul');
    ul.setAttribute('name','ul-root');
    data.forEach(function(element) {
      const list= document.createElement('li');
      list.setAttribute('itemscope','');
      list.setAttribute('itemtype',element.name);
      list.classList.add('card');
      list.innerHTML=`
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
  };


content.appendChild(renderItems(sortData(data,sortOption.value,sortAsc.value)));
renderComputeStats(newData);
/*
Evento Filtrar por provincia
Escucha los cambios en el select de filtrarProvincia
tambien conserva la condicion del evento ordenar
*/
filterProvincia.addEventListener('change', () => {
  document.querySelector('ul[name="ul-root"]').remove();
  if (filterProvincia.value==='All Options') { // Si es todas las opciones
    newData = data;
    if (sortAsc.checked) {
      content.appendChild(renderItems(sortData(newData,sortOption.value,sortAsc.value)));
    } else {
      content.appendChild(renderItems(sortData(newData,sortOption.value,sortDesc.value)));
    }
    renderComputeStats(newData);
  } else { // si es por filtro de location
    newData = filterData(data,'location',filterProvincia.value); // llama el metodo filtrar y lo asigna a dataOriginFilter
    if (sortAsc.checked) {
      content.appendChild(renderItems(sortData(newData,sortOption.value,sortAsc.value))); // filtrar y ordenar por lo seleccionado
    } else {
      content.appendChild(renderItems(sortData(newData,sortOption.value,sortDesc.value)));
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
  document.querySelector('ul[name="ul-root"]').remove();
  if (sortAsc.checked) {
    content.appendChild(renderItems(sortData(newData,sortOption.value,sortAsc.value)));
  }
  if (sortDesc.checked) {
    content.appendChild(renderItems(sortData(newData,sortOption.value,sortDesc.value)));
  }
});

/*
Evento click por ascendente
Verifica si son todas las opciones o si esta filtrada por location
Y finalmente muestra una data ordenada de forma ascendente
*/
sortAsc.addEventListener('click', (event) => {
  document.querySelector('ul[name="ul-root"]').remove();
  content.appendChild(renderItems(sortData(newData,sortOption.value,event.target.value)));
});

/*
Evento click por descendente
Verifica si son todas las opciones o si esta filtrada por location
Y finalmente muestra una data ordenada de forma descendente
*/
sortDesc.addEventListener('click', (event) => {
  document.querySelector('ul[name="ul-root"]').remove();
  content.appendChild(renderItems(sortData(newData,sortOption.value,event.target.value)));
});

btnLimpiar.addEventListener('click', () => {
  document.querySelector('ul[name="ul-root"]').remove();
  filterProvincia.selectedIndex = 0;
  sortOption.selectedIndex = 0;
  sortAsc.checked = true;
  newData = data;
  content.appendChild(renderItems(sortData(newData,sortOption.value,sortAsc.value)));
  renderComputeStats(newData);
});

function renderComputeStats (data) {
  const arrCompute = computeStats(data);
  document.querySelector('strong[id="aventura"]').innerHTML = ((arrCompute.find(typeTour=>typeTour.tipoTurismo==="turismo de aventura")).porcentaje).toFixed(2) +"%";
  document.querySelector('strong[id="playa"]').innerHTML = ((arrCompute.find(typeTour=>typeTour.tipoTurismo==="turismo de playa")).porcentaje).toFixed(2) +"%";
  document.querySelector('strong[id="cultura"]').innerHTML = ((arrCompute.find(typeTour=>typeTour.tipoTurismo==="turismo cultural")).porcentaje).toFixed(2) +"%";
}

btnHeader.addEventListener('click', () => {
  filterZone.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.querySelector('button[name="btn-subcrip"]').addEventListener('click', () => {
  filterZone.scrollIntoView({ behavior: 'smooth', block: 'start' });
});