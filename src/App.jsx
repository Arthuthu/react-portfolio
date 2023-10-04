import './css/site.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Clinica from "./pages/Projects/Clinica"
import NetCoreApp from "./pages/Projects/NetCoreApp"
import Roadmap from "./pages/Projects/Roadmap"
import OldPortfolio from "./pages/Projects/OldPortfolio"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />}/>
    <Route path="clinica" element={<Clinica />}/>
    <Route path="netcoreapp" element={<NetCoreApp />}/>
    <Route path="roadmap" element={<Roadmap />}/>
    <Route path="oldportfolio" element={<OldPortfolio />}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
