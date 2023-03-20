import { Route, Routes, BrowserRouter } from "react-router-dom";
import CriarContaPage from "./Pages/CriarContaPage";
import LoginPage from "./Pages/LoginPage";
import HabitosPage from "./Pages/HabitosPage";
import HistoricoPage from "./Pages/HistoricoPage";
import HojePage from "./Pages/HojePage";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";


function App() {
  const [user, setUser] = useState([])

  return (
    <div className="App">
      <UserContext.Provider value={{user , setUser}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/cadastro" element={<CriarContaPage/>}/>
        <Route path="/habitos" element={<HabitosPage/>}/>
        <Route path="/hoje" element={<HojePage/>}/>
        <Route path="/historico" element={<HistoricoPage/>}/>
      </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
