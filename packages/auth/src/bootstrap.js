import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App'

const mount = (el, { onNavigate, onSignIn, defaultHistory, initialPath } = {}) => {

  const history = defaultHistory ?? createMemoryHistory({ 
    initialEntries: [initialPath] 
  })

  if (onNavigate) history.listen(onNavigate)

  ReactDOM.render(
    <App history={history} onSignIn={onSignIn} />,
    el
  )

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      if (nextPathname === history.location.pathname) {
        return
      }
      history.push(nextPathname)
    }
  };
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_auth_dev-root')
  if (el) {
    mount(el, { defaultHistory: createBrowserHistory() })
  }
}

export { mount }