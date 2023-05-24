import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { theme } from './utlis/constants/theme'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { store } from './redux/store'
// eslint-disable-next-line import/order
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <Provider store={store}>
      <React.StrictMode>
         <ThemeProvider theme={theme}>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </ThemeProvider>
      </React.StrictMode>
   </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
