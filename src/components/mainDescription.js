export const MainDescription = (tour) => {
  const main = document.createElement("main");
  main.innerHTML = `
  <h1> estas en el ${tour.name}</h1>
  `;
  return main;
};