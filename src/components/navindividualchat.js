export const NavIndividualChat = () => {
    const navIndvChat = document.createElement("div");
    navIndvChat.classList.add("chat-header");
    navIndvChat.innerHTML = `
    <nav class = nav-mobile style="background-image: url('https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/Imagenes%20Dataverse/header.jpg');" >
        <ul>
        <li class="chat-nav"><a href="">SALIR</a></li>
        <li class="chat-nav"><a href="">CHAT GRUPAL</a></li>
    </ul>
    </nav>
    `;
    return navIndvChat;
};