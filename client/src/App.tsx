import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Announcements from "./pages/Announcements";
import RequireAuth from "./components/Shared/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route path="/announcements" element={<Announcements />} />
    </Routes>
  );
}

export default App;
