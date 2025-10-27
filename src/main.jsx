import React from 'react'
import ReactDOM from "react-dom/client"
import {BrowserRouter} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import {HelmetProvider} from "react-helmet-async"
import "remixicon/fonts/remixicon.css"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)