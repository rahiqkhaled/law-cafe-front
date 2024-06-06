import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/global/Topbar";
import Sidebar from "./components/global/Sidebar";
import Dashboard from "./components/dashboard";
import Team from "./components/team";
import Cases from "./components/cases";
import Clients from "./components/clients";
//import Form from "./components/form";
import FAQ from "./components/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./components/calendar/calendar";
import Lawyers from "./components/lawyers";
// import Login from "./components/Login/Login";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/dashboard" element={<Dashboard />} /> */}
              <Route path="/team" element={<Team />} />
              <Route path="/lawyers" element={<Lawyers />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/cases" element={<Cases />} />
              {/* <Route path="/form" element={<Form />} /> */}
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
