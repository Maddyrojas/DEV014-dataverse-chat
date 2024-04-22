export const Nav = (liRoot) => {//contact - details - help
  const navIndvChat = document.createElement("div");
  navIndvChat.classList.add("chat-header");
  navIndvChat.innerHTML = `
    <nav class = "nav-mobile">
      <ul>
        <li class="li-nav" id="li-home">HOME</li>
        <li class="li-nav" id="li">${liRoot}</li>
      </ul>
    </nav>
    `;
  return navIndvChat;
};