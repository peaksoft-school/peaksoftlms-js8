import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
<<<<<<< HEAD
=======
import { Provider } from 'react-redux'
import { store } from './redux/store'
>>>>>>> e0c288f8e2449d9aa9fe4631f4cd964ab63e86c8
import { theme } from './utlis/constants/theme'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
<<<<<<< HEAD
      <ThemeProvider theme={theme}>
         <App />
      </ThemeProvider>
=======
      <Provider store={store}>
         <ThemeProvider theme={theme}>
            <App />
         </ThemeProvider>
      </Provider>
>>>>>>> e0c288f8e2449d9aa9fe4631f4cd964ab63e86c8
   </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
