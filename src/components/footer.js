export const Footer = () => {
    const footer = document.createElement("footer");
    //footer.classList.add();
    footer.innerHTML = `
    <div class="zone-infoot">
        <div class="infoot" id="infoot1">
            <h4>INFORMACION DE CONTACTO</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>+(506) 2637 0000</p>
            <p>info@crteenamora.com</p>
        </div>
        <div class="infoot" id="infoot2">
            <h4>ACERCA DE NOSOTROS</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <hr>
        </div>
        <div class="infoot" id="infoot3">
            <h4>SUSCRIPCIÓN</h4>
            <p>Para actualizaciones y donaciones suscribete.</p>
            <button class="btn-subcrip" name="btn-subcrip">SUSCRIBETE</button>
        </div>
    </div>
    <div class="foot">
        <p class="foot1">Privacy Policy</p>
        <p class="foot1">Term&Condition</p>
        <p class="foot1">FAQ</p>
        <p class="foot2">Copyright © 2024 MaddyPao. All rights reserveds</p>
    </div>`;
    return footer;
}