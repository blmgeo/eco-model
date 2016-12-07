const container = document.querySelector('.container')
title = document.querySelector('.title'),
quote = document.querySelector('.quote'),
citation = document.querySelector('.citation'),
explanation = document.querySelector('.explanation'),
iframe = document.querySelector('iframe'),
links = document.querySelectorAll('.nav-link'),
list = document.querySelector('.nav-list'),
menu = document.querySelector('.menu-toggle')

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
  const location = window.location.href.split('#')[1] || 'SteadyState'

  switch (location) {
    case 'SteadyState':
    updateNav(links[0])
    title.innerHTML = 'Steady State'
    quote.innerHTML = `
    When the flow of a substance into a lake, the atmosphere, an animal, or any other "box" is equal
    to the outflow of that substance, then the amount, or "stock", of that substance in the box will
    be constant. This is called a "steady state" or "equilibrium". The ratio of the <em>stock</em> in the box
    to the <em>flow rate</em> (in or out) is called the <em>residence time</em>.
    `
    citation.innerHTML = `
    <a target='_blank' class='ref' href='https://books.google.com/books/about/Consider_a_Spherical_Cow.html?id=w59Rc08_7NwC'>
    - Consider a Spherical Cow
    </a> (Page 23)
    `
    explanation.innerHTML = `
    The example animation below illustrates the flow of carbon atoms in and out of the atmosphere. In this instance, the system contains five
    atoms of carbon at any given time. With a residence time of one second, the inflow and outflow equal 1 atom / second.
    `
    slug = 'PbZZqq'
    break
    case 'NonSteadyState':
    updateNav(links[1])
    title.innerHTML = 'Non-Steady State'
    quote.innerHTML = `
    [Steady state] problems &#8230; [are] solved by equating compartment inflows to compartment outflows &#8230; A more
    difficult class of problems involves stocks that change over time, a situation arising when inflows are not in
    balance with outflows. When the inflow, F<sub>in</sub>, is not equal to the outflow F<sub>out</sub>, then the rate
    of change of the stock is given by &Delta; M = F<sub>in</sub> - F<sub>out</sub> &#8230; [This equation] is the starting point
    for many non-steady-state box models.
    `
    citation.innerHTML = `
    <a target='_blank' class='ref' href='https://books.google.com/books/about/Consider_a_Spherical_Cow.html?id=w59Rc08_7NwC'>
    - Consider a Spherical Cow
    </a> (Page 111)
    `
    explanation.innerHTML = `
    In this example, a pollutant's initial inflow rate is greater than its outflow rate. The inflow rate gradually decreases by 5% / 200 milliseconds, until the
    total inflow reaches zero. At this point, the system's outflow rate is greater than its inflow rate, and the stock of pollutant decreases to zero.
    `
    slug = 'oYbbXm'
    break
    case 'Diversity':
    updateNav(links[2])
    title.innerHTML = 'Diversity'
    quote.innerHTML = `
    A diversity index is a quantitative measure that reflects how many different types (such as species)
    there are in a dataset, and simultaneously takes into account how evenly the basic entities (such as individuals)
    are distributed among those types. The value of a diversity index increases both when the number of types increases
    and when evenness increases. For a given number of types, the value of a diversity index is maximized when all
    types are equally abundant.
    `
    citation.innerHTML = `
    <a target='_blank' class='ref' href='https://en.wikipedia.org/wiki/Diversity_index'>
    - Wikipedia
    </a> (Diversity index)
    `
    explanation.innerHTML = `
    Interact with the model below to compare several diversity indices as they are applied to the same dataset. More detail on these particular incides can be
    found <a target='_blank' class='ref' href='http://www.coastalwiki.org/wiki/Measurements_of_biodiversity'>here</a>.
    `
    slug = 'pNggjw'
    break
    case 'Gompertz':
    updateNav(links[3])
    title.innerHTML = 'Gompertz'
    quote.innerHTML = `
    A Gompertz curve or Gompertz function, named after Benjamin Gompertz, is a sigmoid function. It is a type of mathematical model
    for a time series, where growth is slowest at the start and end of a time period. The right-hand or future value asymptote
    of the function is approached much more gradually by the curve than the left-hand or lower valued asymptote, in contrast to the simple
    logistic function in which both asymptotes are approached by the curve symmetrically. It is a special case of the generalised logistic function.
    `
    citation.innerHTML = `
    <a target='_blank' class='ref' href='https://en.wikipedia.org/wiki/Gompertz_function'>
    - Wikipedia
    </a> (Gompertz function)
    `
    explanation.innerHTML = `
    Notice how the bacteria (white squares) multiply slowly at first, then quickly, and slowly again before they reach approximately 500
    - the upper limit defined by the gompertz function in this example.

    `
    slug = 'KNVVVm'
    break
    case 'Lotka-Volterra':
    updateNav(links[4])
    title.innerHTML = 'Lotka-Volterra'
    quote.innerHTML = `
    The Lotka-Volterra equations describe an ecological predator-prey (or parasite-host) model which assumes that, for a set of fixed positive
    constants A (the growth rate of prey), B (the rate at which predators destroy prey), C (the death rate of predators), and D
    (the rate at which predators increase by consuming prey), &#8230; a prey population <em>x</em> increases at a rate <em>dx=Axdt</em>
    (proportional to the number of prey) but is simultaneously destroyed by predators at a rate <em>dx=-Bxydt</em> (proportional to the product
      of the numbers of prey and predators)  &#8230; [and] a predator population y decreases at a rate <em>dy=-Cydt</em> (proportional to the number
        of predators), but increases at a rate <em>dy=Dxydt</em> (again proportional to the product of the numbers of prey and predators).
        `
        citation.innerHTML = `
        <a target='_blank' class='ref' href='http://mathworld.wolfram.com/Lotka-VolterraEquations.html'>
        - Wolfram Mathworld
        </a> (Lotka-Volterra Equations)
        `
        explanation.innerHTML = `
        This is a more abstract animation, wherein the rabbit represents an entire prey population and the fox represents an entire predator population. Their
        relative heights indicate population size as they change over time (delineated by horizontal motion).
        `
        slug = 'Rorrab'
        break
      }

      iframe.setAttribute('src', `https://codepen.io/blmgeo/embed/preview/${slug}?height=394&theme-id=light&slug-hash=${slug}&default-tab=result&user=blmgeo&embed-version=2`)
    }

    let getContent = () => {
      container.classList.remove('entering')
      container.classList.add('leaving')
      setTimeout(() => {
        loadPen()
      }, 400)
      setTimeout(() => {
        container.classList.remove('leaving')
        container.classList.add('entering')
      }, 500)

    }

    window.addEventListener('load', loadPen)
    window.addEventListener('popstate', getContent)
    menu.addEventListener('click', () => {
      list.classList.toggle('open')
    })

    list.addEventListener('click', () => {
      list.classList.toggle('open')
    })
