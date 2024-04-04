let ROUTES = {}; //mapea las rutas de nuestro sitio
let rootEl; //referencia al elemento html en donde pondremos contenido de nuestros componentes

export const setRootEl = (el) => {
  rootEl = el;
}

export const setRoutes = (routes) => {
  ROUTES = routes;// assign ROUTES
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
}

const queryStringToObject = (queryString) => {
  const newUrlParams = new URLSearchParams(queryString.search);// convert to URLSearchParams
  const objectUrlParams = Object.fromEntries(newUrlParams.entries());// convert to an object
  return objectUrlParams;
}

const renderView = (pathname, props = {}) => {
  rootEl.innerHTML = "";// clear the root element
  rootEl.appendChild(pathname(props)); // find the correct view in ROUTES for the pathname
}

export const navigateTo = (pathname, props) => {
  const newUrlParams = new URLSearchParams(props);
  const URLvisited = window.location.origin + pathname + '?' + newUrlParams;
  window.history.pushState(props, "", URLvisited);//update window history with pushState
  renderView(pathname, props);//render the view with the pathname and object
}

export const onURLChange = (location) => {//it is used to reload home page
  const pathname = location.pathname;
  renderView(ROUTES[pathname], queryStringToObject(location));
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
}