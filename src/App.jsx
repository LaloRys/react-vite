import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {Login} from "./pages/Login";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { supabase } from "./supabase/client";
import { TaskContextProvider } from "./context/TaskContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <Navbar/>
        <div className="container">
        <BrowserRouter
          basename={import.meta.env.DEV ? '/' : '/react-vite/'}
          >
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/react-vite" element={<Login />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>

          </BrowserRouter>

        </div>
      </TaskContextProvider>
    </div>
  );


}

export default App;
