import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from "./pages/Login";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { TaskContextProvider } from "./context/TaskContext";
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <div className="App">
      <TaskContextProvider>
        <Navbar/>

        <div className="container">
        <BrowserRouter
          basename={import.meta.env.DEV ? '/' : '/react-vite'}
          >
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TaskContextProvider>
    </div>
  );


}

export default App;
