import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter, HashRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
