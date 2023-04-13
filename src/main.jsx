import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'


import { store } from './store'
import { WeatherApp } from './weatherApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <WeatherApp />
    </Provider>
  </React.StrictMode>,
)
