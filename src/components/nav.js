export const Nav = (liRoot) => {//contact - details - help
  const navIndvChat = document.createElement("div");
  navIndvChat.classList.add("chat-header");
  navIndvChat.innerHTML = `
    <nav class = "nav-mobile">
      <ul>
        <li class="li-nav"><a href="">HOME</a></li>
        <li class="li-nav" id="li"><a href="">${liRoot}</a></li>
      </ul>
    </nav>
    `;
  return navIndvChat;
};