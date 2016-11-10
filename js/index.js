const title = document.querySelector('.title'),
description = document.querySelector('.description'),
links = document.querySelectorAll('.nav-link')

let updateNav = active => {
  links.forEach(link => {
    if (link.classList.contains('active')) {
      link.classList.remove('active')
    }
  })
  active.classList.add('active')
}

let loadPen = (iframe, slug) => {
  iframe.setAttribute('src', `http://codepen.io/blmgeo/embed/${slug}?height=394&theme-id=dark&slug-hash=${slug}&default-tab=result&user=blmgeo&embed-version=2`)
}

let getContent = () => {
  const current = window.location.href.split('#'),
  iframe = document.querySelector('iframe')

  switch (current[1]) {
    case 'SteadyState':
      updateNav(links[0])
      title.innerHTML = 'Steady State'
      description.innerHTML = '[description]'
      loadPen(iframe, 'PbZZqq')
      break
    case 'NonSteadyState':
      updateNav(links[1])
      title.innerHTML = 'Non-Steady State'
      description.innerHTML = '[description]'
      loadPen(iframe, 'oYbbXm')
      break
    case 'Diversity':
      updateNav(links[2])
      title.innerHTML = 'Diversity'
      description.innerHTML = '[description]'
      loadPen(iframe, 'pNggjw')
      break
    case 'Gompertz':
      updateNav(links[3])
      title.innerHTML = 'Gompertz'
      description.innerHTML = '[description]'
      loadPen(iframe, 'KNVVVm')
      break
    case 'Lotka-Volterra':
      updateNav(links[4])
      title.innerHTML = 'Lotka-Volterra'
      description.innerHTML = '[description]'
      loadPen(iframe, 'Rorrab')
      break
  }

}

window.addEventListener('popstate', getContent)
