const container = document.querySelector('.container')
title = document.querySelector('.title'),
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

let loadPen = () => {
  let slug = ''
  const current = window.location.href.split('#'),
  iframe = document.querySelector('iframe')
  iframe.classList.add('pen')

  switch (current[current.length - 1]) {
    case 'SteadyState':
      updateNav(links[0])
      title.innerHTML = 'Steady State'
      description.innerHTML = '[description]'
      slug = 'PbZZqq'
      break
    case 'NonSteadyState':
      updateNav(links[1])
      title.innerHTML = 'Non-Steady State'
      description.innerHTML = '[description]'
      slug = 'oYbbXm'
      break
    case 'Diversity':
      updateNav(links[2])
      title.innerHTML = 'Diversity'
      description.innerHTML = '[description]'
      slug = 'pNggjw'
      break
    case 'Gompertz':
      updateNav(links[3])
      title.innerHTML = 'Gompertz'
      description.innerHTML = '[description]'
      slug = 'KNVVVm'
      break
    case 'Lotka-Volterra':
      updateNav(links[4])
      title.innerHTML = 'Lotka-Volterra'
      description.innerHTML = '[description]'
      slug = 'Rorrab'
      break
  }

  iframe.setAttribute('src', `https://codepen.io/blmgeo/embed/preview/${slug}?height=394&theme-id=dark&slug-hash=${slug}&default-tab=result&user=blmgeo&embed-version=2`)
}

let getContent = () => {
  container.classList.add('leaving')
  container.classList.remove('entering')
  setTimeout(() => {
    loadPen()
  }, 500)
  setTimeout(() => {
    container.classList.remove('leaving')
    container.classList.add('entering')
  }, 1000)

}

window.addEventListener('popstate', getContent)
