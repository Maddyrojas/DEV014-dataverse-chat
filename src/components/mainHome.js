export const MainHome = () => {
    const main = document.createElement("main");
    main.innerHTML = `
        <div class="filter-zone" name="filter-zone">
            <div class="where-filter">
                <label for="filter" >¿A donde ir? </label>
                <select id="filter" data-testid="select-filter" name="filtrarProvincia" value="location">
                <option value="All Options">Todas las opciones</option>
                <option value="Puntarenas">Puntarenas</option>
                <option value="San José">San José</option>
                <option value="Alajuela">Alajuela</option>
                <option value="Cartago">Cartago</option>
                <option value="Guanacaste">Guanacaste</option>
                <option value="Limón">Limón</option>
                </select>
            </div>
            <button class="button-clear" data-testid="button-clear">Limpiar</button>
        </div>
        <div class="sort-zone" name="sort-zone">
            <label for="sort">Ordenar por</label>
            <select id="sort" data-testid="select-sort" name="ordenar">
                <option value="name">Nombre</option>
                <option value="gastoPromedio">Precio</option>
            </select>
            <label for="asc"><input type="radio" id="asc" name="sort-order" value="asc" checked />Ascendente</label>
            <label for="desc"><input type="radio" id="desc" name="sort-order" value="desc" />Descendente</label>
        </div>
        <h2>VAMOS A TURISTEAR</h2>
        <div id="root">
        </div>
        <div class="text-aventura">
            <a class="a-text">DESCUBRIR POR ACTIVIDAD</a>
            <h1>ACTIVIDADES Y AVENTURA</h1>
            <p class="p-text">Cuando los años pasen recordarás tu vida y sabrás que tomaste la mejor decisión: viajar a cada rincon de Costa Rica y disfrutar de todas sus actividades y cultura.</p>
        </div>
        <div class="compute-zone">
            <div class="compute-box">
                <img
                src="https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/Imagenes%20Dataverse/01-icon-aventura.png"
                alt="01-icon-aventura" 
                id="iconAventura" 
                class="img-icon"/>
                <label>Aventura</label>
                <dt class="compute-element"><strong id="aventura">0%</strong> Destinos</dt>
            </div>
            <div class="compute-box">
                <img
                src="https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/Imagenes%20Dataverse/02-icon-cultura.png"
                alt="02-icon-cultura" 
                id="iconCultura"
                class="img-icon"/>
                <label>Cultura</label>
                <dt class="compute-element"><strong id="cultura">0%</strong> Destinos</dt>
            </div>
            <div class="compute-box">
                <img
                src="https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/Imagenes%20Dataverse/03-icon-playa.png"
                alt="03-icon-playa" 
                id="iconPlaya"
                class="img-icon"/>
                <label>Playa</label>
                <dt class="compute-element"><strong id="playa">0%</strong> Destinos</dt>
            </div>
        </div>
    `;
    return main;
  };