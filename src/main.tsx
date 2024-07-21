import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Editor from './root/editor'
import { MainState } from './context/mainstate'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <MainState>
  <Editor/>
  </MainState>
  </React.StrictMode>,
)
