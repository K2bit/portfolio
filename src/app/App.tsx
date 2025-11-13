import AppRoutes from './AppRoutes'
import { BrowserRouter } from 'react-router-dom';

import "../styles/global.css";

function App() {

  return (
    <>
      <BrowserRouter basename="/portfolio">
        <AppRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
