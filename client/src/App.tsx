import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Announcements from "./pages/Announcements";
import RequireAuth from "./components/Shared/RequireAuth";
import NotFound from "./pages/NotFound";

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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
