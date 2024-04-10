export const MainDescription = (tour) => {
  const main = document.createElement("main");
  const div = document.createElement("div");
  main.classList.add("mainDescriptionx");
  div.classList.add("divDescriptionx");

  div.innerHTML = `
  <h1 class="h1Descriptionx">${tour.name}</h1>
  <img src= ${tour.imageUrl} alt=${tour.shortDescription} class="imgDescriptionx">
  <h2>CATEGORIA: ${tour.tipoTurismo }</h2>
  <h2>LOCATION: ${tour.location}</h2>
  <h3 class="h3Descriptionx">${tour.description}</h3>
  <p>Podras hacer tus compras en <strong>${tour.facts.compras}</strong></p>
  <p>Te recomendados dejustar ricos platillos en <strong>${tour.facts.alimentacion}</strong></p>
  `;
  main.appendChild(div);
  return main;
};