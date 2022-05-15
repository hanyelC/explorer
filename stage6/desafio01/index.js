const links = document.querySelectorAll('a')

links.forEach(link => {
  link.addEventListener('click', (e) => {
    toggleMenuItemsColor(e.target)
  })
})

const routes = {
  "/": "/pages/home.html",
  "/universo": "/pages/universo.html",
  "/exploracao": "/pages/exploracao.html",
  404: "/pages/404.html"
}

function route(event) {
  event = event || window.event
  event.preventDefault()

  history.pushState({}, "", event.target.href)

  handle()
}

function handle() {
  const { pathname } = location

  const route = routes[pathname] || routes[404]

  fetch(route)
    .then(data => data.text())
    .then(html => document.querySelector('#content').innerHTML = html)
}

handle()

onpopstate = () => handle()

document.querySelector('img').addEventListener('click', () => {
  history.pushState({}, "", location.origin)
  handle()

  toggleMenuItemsColor(links[0])
})

function redirect(a){
  history.pushState({}, "", location.origin + a)  
  handle()
}

function toggleMenuItemsColor(itemToStyle){
  links.forEach(link => link.classList.remove('selected'))
  itemToStyle.classList.add('selected')
}