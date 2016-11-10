const container = document.querySelector('.container')
title = document.querySelector('.title'),
description = document.querySelector('.description'),
citation = document.querySelector('.citation'),
iframe = document.querySelector('iframe')
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
  const current = window.location.href.split('#')[1] || 'SteadyState'

  switch (current) {
    case 'SteadyState':
      updateNav(links[0])
      title.innerHTML = 'Steady State'
      description.innerHTML = `
      When the flow of a substance into a lake, the atmosphere, an animal, or any other "box" is equal
      to the outflow of that substance, then the amount, or "stock", of that substance in the box will
      be constant. This is called a "steady state" or "equilibrium". The ratio of the <em>stock</em> in the box
      to the <em>flow rate</em> (in or out) is called the <em>residence time</em>.
      `
      citation.innerHTML = `
      <a target='_blank' class='nav-link' href='https://books.google.com/books/about/Consider_a_Spherical_Cow.html?id=w59Rc08_7NwC'>
        - Consider a Spherical Cow
      </a> (Page 23)
      `
      slug = 'PbZZqq'
      break
    case 'NonSteadyState':
      updateNav(links[1])
      title.innerHTML = 'Non-Steady State'
      description.innerHTML = `
      [Steady state] problems &#8230; [are] solved by equating compartment inflows to compartment outflows &#8230; A more
      difficult class of problems involves stocks that change over time, a situation arising when inflows are not in
      balance with outflows. When the inflow, F<sub>in</sub>, is not equal to the outflow F<sub>out</sub>, then the rate
      of change of the stock is given by &Delta; M = F<sub>in</sub> - F<sub>out</sub>.
      `
      citation.innerHTML = `
      <a target='_blank' class='nav-link' href='https://books.google.com/books/about/Consider_a_Spherical_Cow.html?id=w59Rc08_7NwC'>
        - Consider a Spherical Cow
      </a> (Page 111)`
      slug = 'oYbbXm'
      break
    case 'Diversity':
      updateNav(links[2])
      title.innerHTML = 'Diversity'
      description.innerHTML = `
      When the flow of a substance into a lake, the atmosphere, an animal, or any other "box" is equal
      to the outflow of that substance, then the amount, or "stock", of that substance in the box will
      be constant. This is called a "steady state" or "equilibrium". The ratio of the <em>stock</em> in the box
      to the <em>flow rate</em> (in or out) is called the <em>residence time</em>.
      `
      citation.innerHTML = '-- Consider a Spherical Cow'
      slug = 'pNggjw'
      break
    case 'Gompertz':
      updateNav(links[3])
      title.innerHTML = 'Gompertz'
      description.innerHTML = `
      When the flow of a substance into a lake, the atmosphere, an animal, or any other "box" is equal
      to the outflow of that substance, then the amount, or "stock", of that substance in the box will
      be constant. This is called a "steady state" or "equilibrium". The ratio of the <em>stock</em> in the box
      to the <em>flow rate</em> (in or out) is called the <em>residence time</em>.
      `
      citation.innerHTML = '-- Consider a Spherical Cow'
      slug = 'KNVVVm'
      break
    case 'Lotka-Volterra':
      updateNav(links[4])
      title.innerHTML = 'Lotka-Volterra'
      description.innerHTML = `
      When the flow of a substance into a lake, the atmosphere, an animal, or any other "box" is equal
      to the outflow of that substance, then the amount, or "stock", of that substance in the box will
      be constant. This is called a "steady state" or "equilibrium". The ratio of the <em>stock</em> in the box
      to the <em>flow rate</em> (in or out) is called the <em>residence time</em>.
      `
      citation.innerHTML = '-- Consider a Spherical Cow'
      slug = 'Rorrab'
      break
  }

  iframe.setAttribute('src', `https://codepen.io/blmgeo/embed/preview/${slug}?height=394&theme-id=light&slug-hash=${slug}&default-tab=result&user=blmgeo&embed-version=2`)
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
window.addEventListener('load', loadPen)
window.addEventListener('popstate', getContent)
