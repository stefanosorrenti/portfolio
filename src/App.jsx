import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppDefaultLayout } from "./layouts/AppDefaultLayout"
import { AppHomePage } from "./pages/AppHomePage"

function App() {


  return (
    <BrowserRouter>

      <Routes>

        <Route element={<AppDefaultLayout />}>
        
          <Route path="/" element={<AppHomePage />} />
          
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
