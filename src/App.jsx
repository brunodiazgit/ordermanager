import './App.css'
import ToolBar from './components/ToolBar'
import NavBar from './components/NavBar'
import OrderFormContainer from './components/OrderFormContainer'
import Workshop from './components/Workshop'
import Queries from './components/Queries'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {


  return (
    <>
      <BrowserRouter>
        <ToolBar />
        <NavBar />
        <Routes>
          <Route>
            <Route path="/" element={<OrderFormContainer/>} />
            <Route path="/workshop" element={<Workshop/>} />
            <Route path="/queries" element={<Queries/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
