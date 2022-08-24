// 参考: https://github.com/melnikaite/alpine-router

import { init as page1Init } from './pages/page1/page1'
import { init as page2Init } from './pages/page2/page2'

window.addEventListener('hashchange', onRouteChange)
onRouteChange()

async function onRouteChange() {
  const appElement = document.querySelector('#app') as HTMLElement
  await loadRoute(appElement)
  window.Alpine?.initTree(appElement)
}

async function loadRoute(appElement: HTMLElement) {
  switch (window.location.hash) {
    case '#page2':
      appElement.innerHTML = await fetch('./pages/page2/page2.html').then(template => template.text())
      page2Init()
      break
    case '#page1':
    default:
      appElement.innerHTML = await fetch('./pages/page1/page1.html').then(template => template.text())
      page1Init()
      break
  }
}

export {}
