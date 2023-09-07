import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Converter from "./pages/Converter";

export default function App() {
   return (
      <div className="App">
         <Router>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route element={<Home />} index='true' />
                  <Route path="/converter" element={<Converter />} />
               </Route>
            </Routes>
         </Router>
      </div>
   );
}
