import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {Login} from "./pages/Login";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { supabase } from "./supabase/client";
import { TaskContextProvider } from "./context/TaskContext";
import Navbar from "./components/Navbar";

function App() {
<<<<<<< HEAD
  // const navigate = useNavigate();

  // useEffect(() => {
  //   supabase.auth.onAuthStateChange((event, session) => {
  //     if (!session) {
  //       navigate("/react-vite");
  //       console.log("App Desconectado",session, event)
  //     } else {
  //       navigate("/Home");
  //       console.log("App Conectado",session, event)
  //     }
  //   })

  //   }, []);
=======
//   const navigate = useNavigate();

//   useEffect(() => {
//     supabase.auth.onAuthStateChange((event, session) => {
//       if (!session) {
//         navigate("/Login");
//         console.log("App Desconectado",session, event)
//       } else {
//         navigate("/Home");
//         console.log("App Conectado",session, event)
//       }
//     })

//     }, []);
>>>>>>> b2dd52027b85cdf68ef8926cb64cc1cea17d27bb


  return (
    <div className="App">
      <TaskContextProvider>
        <Navbar/>

        <div className="container">
<<<<<<< HEAD
        <BrowserRouter
          basename={import.meta.env.DEV ? '/' : '/react-vite'}
          >
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/react-vite" element={<Login />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
=======
      
        <BrowserRouter
          basename={"/Login"}
          >
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>

>>>>>>> b2dd52027b85cdf68ef8926cb64cc1cea17d27bb
        </div>
      </TaskContextProvider>
    </div>
  );


}

export default App;
