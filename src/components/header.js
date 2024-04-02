export const Header = () => {
    const header = document.createElement("header");
    header.innerHTML = `   
    <div class="top-page">
        <div class="nav-zone">
            <span class="tx-nav">(+506) 2637 0000 _____ info@crtour.com</span>
            <nav>
                <ul>
                <li><a href="">INICIO</a></li>
                <li><a href="">TOURS</a></li>
                <li><a href="">DETALLES</a></li>
                <li><a href="">ACTIVIDADES</a></li>
                <li><a href="">ZONAS TURISTICAS</a></li>
                </ul>
            </nav>
            <input type="search" name="search-header" id="search-header" placeholder="¿Qué lugar estas buscando?">
        </div>
        <h1>Costa Rica te enamora</h1>
        <em class="text-welcome">Conocé los mejores rincones de nuestro país, descrubriendo todas las actividades que Costa Rica nos ofrece para hacer y disfrutar.</em>
        <button class="btn-header" name="btn-header">SABER MÁS</button>
    </div>
    `;
    return header;
  };