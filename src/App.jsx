import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./features/DashboardLayout";
import Interns from "./features/Interns";
import Moderators from "./features/Moderators";
import Settings from "./features/Settings";
import NotFound from "./components/NotFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to={"/interns"} replace />} />
        <Route path="/interns" element={<Interns />} />
        <Route path="/moderators" element={<Moderators />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
