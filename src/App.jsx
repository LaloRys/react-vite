import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {Login} from "./pages/Login";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { supabase } from "./supabase/client";
import { TaskContextProvider } from "./context/TaskContext";
import Navbar from "./components/Navbar";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/Login");
        console.log("App Desconectado",session, event)
      } else {
        navigate("/Home");
        console.log("App Conectado",session, event)
      }
    })

    }, []);


  return (
    <div className="App">
      <TaskContextProvider>
<<<<<<< HEAD
        <Navbar/>

        <div className="container">
        
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        </div>
=======
        <Navbar/>  
          <BrowserRouter
          basename={'/react-vite'}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
>>>>>>> b9bb96bb3d6333c540619cc12bead90d7409ad7a
      </TaskContextProvider>
    </div>
  );


}

export default App;
