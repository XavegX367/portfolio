import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import './assets/css/index.css'
import Layout from './components/Layout/Layout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Layout>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Layout>
)