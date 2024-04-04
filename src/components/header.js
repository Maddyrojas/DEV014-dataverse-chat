export const Header = () => {
  const header = document.createElement("header");
  header.innerHTML = `   
    <div class="top-page">
        <div class="nav-zone">
            <nav>
                <ul>
                    <li class="li-nav"><a href="">HOME</a></li>
                    <li class="li-nav"><a href="">DETAILS</a></li>
                    <li class="li-nav"><a href="">CONTACT</a></li>
                </ul>
                <input type="search" name="search-header" id="search-header" placeholder="¿Qué lugar estas buscando?">
            </nav>
            <button class="btn-grupChat" name="btn-grupChat">CHAT GRUPAL</button>
        </div>
        <h1>Costa Rica te enamora</h1>
        <em class="text-welcome">Conocé los mejores rincones de nuestro país, descrubriendo todas las actividades que Costa Rica nos ofrece para hacer y disfrutar.</em>
        <button class="btn-header" name="btn-header">SABER MÁS</button>
    </div>
    `;
  return header;
};