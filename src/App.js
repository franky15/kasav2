import { BrowserRouter, Route, Routes } from "react-router-dom";
//importation du router
import Router from "./pages/Router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Router />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
