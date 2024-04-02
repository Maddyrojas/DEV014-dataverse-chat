export const MainHome = () => {
    const main = document.createElement("main");
    main.innerHTML = `   
    <main>
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
    </main>
    `;
    return main;
  };