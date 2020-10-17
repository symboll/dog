import React, { lazy, Suspense } from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'


import Layout from './components/Layout'
const Home = lazy(()=> import('./pages/Home'))

function App() {
  return (
    <Provider store={store}> 
      <BrowserRouter>
        <Layout>
          <Suspense fallback={null}>
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

export default App
