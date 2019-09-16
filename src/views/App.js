'use strict'

import React, { Suspense, lazy } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import i18n from '../config/i18n.config'

import RootStore from '../stores/RootStore'

import { addDebug } from '../utils/debug'
import { askPermission } from '../utils/notify'

import PrivateRouteWithContext from '../containers/PrivateRouteWithContext'

import RootContext from '../context/RootContext'

import Spinner from '../components/Spinner'

import '../styles/App.scss'
import '../styles/Scrollbars.scss'

const rootStore = new RootStore(i18n)

// Load default settings
rootStore.settingsStore.load()

// Load a session (user) from cache
rootStore.sessionStore.loadFromCache()

addDebug({ rootStore })

askPermission()

const loginPath = '/connect'

const ControlPanel = lazy(() =>
  import(/* webpackChunkName: "ControlPanel" */ '../containers/ControlPanel')
)

const ChannelHeader = lazy(() =>
  import(/* webpackChunkName: "ChannelHeader" */ '../containers/ChannelHeader')
)

const ChannelView = lazy(() => import(/* webpackChunkName: "ChannelView" */ './ChannelView'))

const IndexView = lazy(() => import(/* webpackChunkName: "IndexView" */ './IndexView'))

const LoginView = lazy(() => import(/* webpackChunkName: "LoginView" */ './LoginView'))

const SettingsView = lazy(() => import(/* webpackChunkName: "SettingsView" */ './SettingsView'))

const AlphaDisclaimer = lazy(() =>
  import(/* webpackChunkName: "AlphaDisclaimer" */ '../containers/AlphaDisclaimer')
)

function AppView ({ location }) {
  const [appState, setState] = React.useState({
    redirectTo: null
  })

  const setAppState = React.useCallback(
    newState => setState(Object.assign({}, appState, newState)),
    [appState]
  )

  React.useEffect(() => {
    if (appState.redirectTo === location.pathname) {
      setAppState({ redirectTo: null })
    }
  }, [appState.redirectTo, location.pathname])

  // Pass these down to children
  const ctx = React.useContext(RootContext)
  ctx.setAppState = setAppState
  ctx.appState = appState

  return (
    <div className='App view'>
      <Suspense fallback={<Spinner className='spinner suspense-fallback' size='64px' />}>
        <PrivateRouteWithContext children={props => <ControlPanel {...props} />} />

        <PrivateRouteWithContext
          exact
          path={['/channel/:channel', '/settings']}
          component={ChannelHeader}
        />

        <Switch>
          <Route exact path={loginPath} component={LoginView} />
          <PrivateRouteWithContext
            exact
            path='/channel/:channel'
            component={ChannelView}
            loginPath={loginPath}
          />
          <PrivateRouteWithContext
            exact
            path='/settings'
            component={SettingsView}
            loginPath={loginPath}
          />
          <PrivateRouteWithContext component={IndexView} loginPath={loginPath} />
        </Switch>

        {/* Render an alpha disclaimer on login page */}
        <Route exact path={loginPath} component={AlphaDisclaimer} />
        {appState.redirectTo ? <Redirect to={appState.redirectTo} /> : null}
      </Suspense>
    </div>
  )
}

function App () {
  return (
    <RootContext.Provider value={rootStore}>
      <Router>
        {/* Render App in a route so it will receive the "location"
              prop and rerender properly on location changes */}
        <Route children={props => <AppView {...props} />} />
      </Router>
    </RootContext.Provider>
  )
}

export default App
